
import styled from 'styled-components';

export const Card = styled.div`
background-color: blue;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 10px;
margin-bottom: 24px;
padding: 24px;
`;

export const CardHeader = styled.h2`
font-weight: 700;
margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
display: flex;
align-items: center;
`;

export const Button = styled.button`
height: 40px;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
margin-left: 8px;
background-color: #ffc000;
color: #000;
border-radius: 5px;
padding: 0 20px;
margin-left: 16px;
`;

export const DefaultText = styled.p`
font-size: 20px;
font-weight: 700;
`;

export const Input = styled.input`
width: 150px;
height: 40px;
border-radius: 5px;
text-align: center;
padding-left: 5px;
font-size: 20px;
`;