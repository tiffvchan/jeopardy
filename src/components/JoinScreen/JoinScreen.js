import React, {useState} from 'react';
import styled from 'styled-components';
import { Card, CardHeader, InputWrapper, Button, Input, DefaultText } from '../Styles';

const EditableCardHeader = styled(CardHeader)`
  cursor: pointer;
`;

const BuzzerCard = styled(Card)`
  width: 275px;
`;

const UpdateButton = styled(Button)`
  font-size: 16px;
  padding: 10px;
`;

const BuzzerButton = styled.button`
  margin-top: 20px;
  border-radius: 100px;
  width: 200px;
  height: 200px;
  outline: none;
  background-color: ${(props) => props.buzzed? '#90EE90' : 'red'};
`;

const UpdateInput = styled(Input)`
  font-size: 16px;
`;


const JoinScreen = ({useBuzz, useGuest, useRoom, useUpdateGuest}) => {
  const [username, setUsername] = useState();
  const [editName, setEditName] = useState(false);
  const { id: guestId, name, buzzed } = useGuest();
  const { mutate: buzz } = useBuzz();
  const { mutate: updateGuest } = useUpdateGuest(guestId);

  const { enableBuzzers } = useRoom();

  const handleSubmit = () => {
    updateGuest({name: username});
    setEditName(false);
  }

  return (
    <>
      <BuzzerCard>
        <EditableCardHeader onClick={() =>{setEditName(!editName)}}>{name}</EditableCardHeader>
        {editName && 
          <InputWrapper>
            <UpdateInput type='text' placeholder='Enter a Name' onChange={(e) => setUsername(e.target.value)} maxLength={20}/>
            <UpdateButton type='submit' onClick={handleSubmit}>Submit</UpdateButton>
          </InputWrapper>
        } 
        <BuzzerButton buzzed={!!buzzed} onClick={() => { !!enableBuzzers && buzz()}}>
          {!!buzzed &&
            <DefaultText>Buzzed!</DefaultText>
          }
        </BuzzerButton>
      </BuzzerCard>
    </>
  );
}
 
export default JoinScreen;