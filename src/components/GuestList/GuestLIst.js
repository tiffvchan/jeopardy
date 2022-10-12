import React from "react";
import styled, { keyframes } from "styled-components";
import { DefaultText } from '../Styles';

const ListHeader = styled(DefaultText)`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 16px;
`

const blink = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0
  }

  100% {
    opacity: 1;
  }
`;

const List = styled.div`
  font-size: 20px;
  min-height: 100px;
`;

const ListItem = styled.div`
  display: flex;
`;

const ListText = styled.div`
  padding: 0;
  margin: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BuzzedListText = styled(ListText)`
  animation: ${blink} 0.5s linear;
  opacity: 1;
`;

const ListTextStatus = styled.p`
  margin-left: 16px;
`;

const Divider = styled.hr`
  width: 100px;
  margin-bottom: 20px;
`;

export default function GuestList({useGuestList}) {
  const guestList = useGuestList();
  const buzzedList = guestList
    .filter(({ buzzed }) => !!buzzed)
    .sort((a, b) => a.buzzed.toMillis() - b.buzzed.toMillis());

    const notBuzzedList = guestList
    .filter(({ buzzed }) => !buzzed)
    .sort((a, b) => b.score - a.score);
  

  return (
    <>
      <ListHeader>
        Buzzed
      </ListHeader>
      <List>
        {buzzedList.map(({ id, name, buzzed }, idx) => (
            <ListItem key={idx}>
              <BuzzedListText>
                {name}
                <ListTextStatus>
                  {idx > 0
                    ? `+${buzzed.toMillis() - buzzedList[0].buzzed.toMillis()}  ms`
                    : "🏆"}
                </ListTextStatus>
              </BuzzedListText>
            </ListItem>
        ))}
      </List>
      <Divider/>
      <ListHeader>
        Not Buzzed
      </ListHeader>
      <List>
        {notBuzzedList.map(({ id, name, buzzed }, idx) => (
            <ListItem key={idx}>
              <ListText>{name}</ListText>
            </ListItem>
        ))}
      </List>
    </>
  );
}

