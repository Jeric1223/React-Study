import styled, { keyframes } from "styled-components";
import Shuriken1Level from "../../assets/Shuriken1Level.png";
import Shuriken2Level from "../../assets/Shuriken2Level.png";

export const test = keyframes`
  0% {
    margin-left: 0px;
  }
  50% {
    margin-left: 1600px;
  }
  100% {
    margin-left: 0px;
    transform: rotate(1turn);
  }
`;

export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #107369;
  overflow: hidden;
  h1 {
    font-size: 75px;
    font-family: "AppleSDGothicNeoEB00";
    margin: 55px 0 0 73px;
    color: #0FF2B2;
  }
  .levelAndMoneyBox{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 75px;
    margin-bottom: 42px;
    font-size: 44px;
    color: #0FF2B2;
    font-family: AppleSDGothicNeoEB00;
  }
  .buttonContainer{
    width: 100%;
    display:flex;
    justify-content: center;
  }
  button {
    width: 500px;
    height: 75px;
    border-radius: 40px;
    border: none;
    font-size: 24px;
    font-family: "AppleSDGothicNeoEB00";
    &:focus {
      outline: none;
    }
  }
  .shuriken {
    width: 30%;
    height: 30%;
    background-image: url(${Shuriken2Level});
    background-repeat: no-repeat;
    background-size: 38%;
    animation: ${test} 2s;
    margin-bottom: 100px;
    margin-left: 73px;
  }
`;
