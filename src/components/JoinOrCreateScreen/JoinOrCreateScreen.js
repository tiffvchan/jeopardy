import React, { useEffect, useState } from 'react';
import { useCreateRoom } from '../../hooks';
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { useAuth, useUser } from "reactfire";
import styled from 'styled-components';

import {Card, CardHeader, InputWrapper, Button, DefaultText} from '../Styles';

const CustomInputWrapper = styled(InputWrapper)`
  margin-bottom: 24px;
`;

const JoinOrCreateScreen = () => {
  const auth = useAuth();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { data: user } = useUser();

  const signIn = async () => {

    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
    }
    signInWithGoogle();
  };

  const { mutate: createRoom, data: newRoom } = useCreateRoom();

  useEffect(() => {
    if (newRoom) {
      document.location.search = `?roomId=${newRoom}`;
    }
    if (user && user.uid === 'ob5yKQKTCbO6I9gZyK5SxmKUrB73') {
      setIsAuthorized(true);
    }
  }, [newRoom, user]);


  return (
    <>
      <Card>
        <CardHeader>Host a Game</CardHeader>
        <CustomInputWrapper>
          <Button type='submit' onClick={signIn}>Sign In</Button>
        </CustomInputWrapper>
        {isAuthorized && (
          <CustomInputWrapper>
          <DefaultText>Create a Room</DefaultText>
          <Button type='submit' onClick={() => createRoom()}>Host</Button>
        </CustomInputWrapper>
          )
        }
      </Card>
    </>
  );
}

export default JoinOrCreateScreen;