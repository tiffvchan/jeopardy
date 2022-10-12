import React, { useState, useEffect, Suspense } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import { QueryClient, QueryClientProvider } from "react-query";
import { useIsHost, useClearBuzzers, useParams, useRoom, useBuzz, useGuest, useGuestList, useUpdateGuest } from "./hooks";
// for the snowfall
// import Snowfall from 'react-snowfall';
import JoinOrCreateScreen from './components/JoinOrCreateScreen/JoinOrCreateScreen';
import JoinScreen from './components/JoinScreen/JoinScreen';
import PlayScreen from './components/PlayScreen/PlayScreen';
import "./App.scss";

import introMusic from "./assets/music/intro.mp3";
// import rallymascot from "./assets/img/xmasrallymascot.png";
// import santa from "./assets/img/drunksanta.png";

function App() {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  const auth = getAuth(app);
  const { roomId } = useParams();
  const [playIntro, setPlayIntro] = useState(false);
  // const [snowfall, setSnowfall] = useState(false);

  const handlesMusicClick = () => {
    setPlayIntro(!playIntro);
  };

  // const handlesSnowfall = () => {
  //   setSnowfall(!snowfall);

  // }

  return (
    <div className="app">
      {/* <img src={"https://www.animatedimages.org/data/media/359/animated-santa-claus-image-0420.gif"} className={`app__gif ${playIntro ? "app__gif-visible" : ""}`} alt="santa"/> */}
      {/* {snowfall && 
      <Snowfall 
      snowflakeCount={200}
      />
      } */}
      {playIntro && <audio autoplay="autoplay" src={introMusic}></audio>}
      <div className="app__heading-wrap">
        {/* <img className="app__heading-img" src={santa} alt="rallylogo" /> */}
        <h1
          className={`app__heading ${playIntro ? "app__heading--active" : ""}`}
          onClick={handlesMusicClick}
        >
          Jeopardy
        </h1>
      </div>
      <div>
      <AuthProvider sdk={auth}>
        <FirestoreProvider sdk={firestore}>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loading />}>
              {roomId ? <Room /> : <JoinOrCreateScreen/>}
            </Suspense>
          </QueryClientProvider>
        </FirestoreProvider>
       </AuthProvider>
      </div>
     </div> 
  );
}

const Room = () => {
  const isHost = useIsHost();
  const { id: roomId } = useRoom();
  useEffect(() => {
    document.title = `Jeopardy: ${roomId}`;
  }, [roomId]);
  return isHost ? <PlayScreen useRoom={useRoom} useClearBuzzers={useClearBuzzers} useGuestList={useGuestList} useIsHost={useIsHost} useUpdateGuest={useUpdateGuest} /> : <JoinScreen useBuzz={useBuzz} useGuest={useGuest} useRoom={useRoom} useUpdateGuest={useUpdateGuest} />;
};

const Loading = () => {
  return (
      <p>Loading...</p>
  );
};

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

export default App;
