import React, { useState, useEffect} from "react";
import styled from 'styled-components';
import { Button, DefaultText } from '../Styles';
import GuestList from "../GuestList/GuestLIst";
import Category from "../Category/Category";
import FinalJeopardy from "../FinalJeopardy/FinalJeopardy";
import Scoreboard from "../Scoreboard/Scoreboard";
import ButtonSwitchGame from "../ButtonSwitchGame/ButtonSwitchGame";
import finaljep from "../../data/finaljep";
import data from "../../data/data";
import dataAlt from "../../data/dataAlt";
import dataAlt2 from "../../data/dataAlt2";
import dataAlt3 from "../../data/dataAlt3";
import dataAlt4 from "../../data/dataAlt4";
import dataAlt5 from "../../data/dataAlt5";
import dataAlt6 from "../../data/dataAlt6";
import dataAlt7 from "../../data/dataAlt7";
import dataAlt8 from "../../data/dataAlt8";
import dataAlt9 from "../../data/dataAlt9";
import dataAlt10 from "../../data/dataAlt10";
import dataAlt11 from "../../data/dataAlt11";
import {
  doc,
  updateDoc,
} from "firebase/firestore";
import { useFirestore } from "reactfire";

const gameData = [
  data,
  dataAlt,
  dataAlt2,
  dataAlt3,
  dataAlt4,
  dataAlt5,
  dataAlt6,
  dataAlt7,
  dataAlt8,
  dataAlt9,
  dataAlt10,
  dataAlt11,
];

const PlayContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const GameBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 24px;
  margin-right: 250px;
`;

const GuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 250px;
  min-height: 750px;
`;

const BuzzerButton = styled(Button)`
  background-color: pink;
  margin: 0;
  margin-top: 24px;
`

const ClearBuzzerButton = styled(BuzzerButton)`
  background-color: #F97276;
`

const EnableBuzzerButton = styled(BuzzerButton)`
  background-color: #90EE90;
`
const BuzzerStatus = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
`;

const BuzzerStatusIndicator = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: ${(props) => props.enableBuzzers? '#90EE90' : '#F97276'};
`;

const RoomId = styled(DefaultText)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-weight: 700;
`;

const PlayScreen = ({useRoom, useGuestList, useClearBuzzers}) => {
  const [finalJeopardyStatus, setFinalJeopardyStatus] = useState(false);
  const [revealed, setRevealed] = useState([]);
  const [categories, setCategories] = useState(null);
  const [finalJepQ, setFinalJepQ] = useState(finaljep[0]);
  const [currGame, setCurrGame] = useState(null);
  const [gameIndex, setGameIndex] = useState({});

  const firestore = useFirestore();
  const { id: roomId, enableBuzzers } = useRoom();
  const { mutate: clearBuzzers } = useClearBuzzers();
  // const shouldPlaySound =
  //   guestList.filter(({ buzzed }) => !!buzzed).length === 1;

  const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(5));
  };

  const addToRevealed = () => {
    const newlyRevealed = [...revealed, revealed.length + 1];
    setRevealed(newlyRevealed);
  };


  const setNewGame = (num) => {
    // setPlayIntro(false);
    let quest = {};
    let counter = 0;

    if (!gameIndex[num]) {
      do {
        quest = gameData[num][getRandomInt()].questions[getRandomInt()];
        if (!quest["dailydouble"]) {
          quest["dailydouble"] = true;
          counter++;
        }
      } while (counter < 2);
    }

    let thing = {};
    thing[num] = true;

    // reset state variables
    setRevealed([]);
    setFinalJeopardyStatus(false);
    setCategories(gameData[num]);
    setFinalJepQ(finaljep[num]);
    setCurrGame(num);
    setGameIndex({ ...gameIndex, ...thing });
  };

  useEffect(() => {
    if(roomId) {
      setNewGame(0);
    }
    // eslint-disable-next-line
  }, []);

  const handlesClick = (num) => {
    setNewGame(num);
  };

  const handlesFinalJepClick = () => {
    setFinalJeopardyStatus(!finalJeopardyStatus);
  };

  return (
    <PlayContainer>
      <GuestContainer>
        <RoomId>Room Id: {roomId}</RoomId>
        <GuestList useGuestList={useGuestList}/>
        <ClearBuzzerButton
          // disabled={guestList.every(({ buzzed }) => !buzzed)}
          onClick={() => {
            const roomRef = doc(firestore, "rooms", roomId);
            updateDoc(roomRef, { enableBuzzers: false });
            clearBuzzers(); 
          }}
        >
          Clear Buzzers
        </ClearBuzzerButton>
        <EnableBuzzerButton
          onClick={() => {
            const roomRef = doc(firestore, "rooms", roomId);
            updateDoc(roomRef, { enableBuzzers: true });
            clearBuzzers(); 
          }}
        >
          Enable Buzzers
        </EnableBuzzerButton>
        <BuzzerStatus>
          <DefaultText>Buzzer:</DefaultText>
          <BuzzerStatusIndicator enableBuzzers={enableBuzzers}/>
        </BuzzerStatus>
      </GuestContainer>
      <GameBoard >
        {finalJeopardyStatus === true ? (
          <FinalJeopardy finalJeopardyQ={finalJepQ} />
          ) : (
            <div className="app__cards">
            {categories &&
              categories?.map((category, index) => {
                return (
                  <Category
                  key={index}
                  category={category}
                  addToRevealed={addToRevealed}
                  currGame={currGame}
                  useRoom={useRoom}
                  />
                  );
                })}
          </div>
        )}

        <Scoreboard useRoom={useRoom}/>
        <div className="app__games">
          <div className="app__button-wrap">
            {gameData.map((game, i) => {
              return (
                <ButtonSwitchGame
                key={i}
                gameNum={i}
                handlesClick={handlesClick}
                currGame={currGame}
                />
                );
              })}
          </div>
        <button className="app__button-finaljep" onClick={handlesFinalJepClick}>
          {`${finalJeopardyStatus ? "Back" : "Final Jeopardy"}`}
        </button>
        </div>
      </GameBoard>
    </PlayContainer>
  );
};

export default PlayScreen;
