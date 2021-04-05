import styled, { keyframes, css } from "styled-components";
import Shuriken1Level from "../../assets/Shuriken1Level.png";
import Shuriken2Level from "../../assets/Shuriken2Level.png";

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

export const shurikenMoving = keyframes`
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
    color: #0ff2b2;
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
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    cursor: pointer;
  }
`;

export const LevelAndMoneyBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 75px;
  margin-bottom: 42px;
  font-size: 44px;
  color: #0ff2b2;
  font-family: AppleSDGothicNeoEB00;
`;

export const Shuriken = styled.div`
  width: 30%;
  height: 30%;
  background-image: url(${Shuriken2Level});
  background-repeat: no-repeat;
  background-size: 38%;
  margin-bottom: 100px;
  margin-left: 73px;
  ${(props) =>
    props.shuriken &&
    css`
      animation: ${shurikenMoving} ${props.shurikenSpeed}s;
    `}
`;

export const UpgradeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const UpgradeContainer = styled.div`
  position: absolute;
  /* width: 500px;
  height: 450px;*/
  width: 26%;
  height: 48%;
  min-width: 500px;
  background-color: #0bbf8c;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1.5s;
  ${(props) =>
    props.showBox
      ? css`
          bottom: -2%;
        `
      : css`
          bottom: -37%;
        `};
  div {
    width: 91%;
    padding: 24px;
    font-size: 2.5rem;
    font-family: "AppleSDGothicNeoEB00";
    border-bottom: solid 2px black;
    margin-bottom: 10.5px;
    text-align: center;
    cursor: pointer;
  }
  p {
    width: 520px;
    font-size: 1.2rem;
    font-family: "AppleSDGothicNeoEB00";
    text-align: center;
    padding: 15px;
  }
  h2 {
    font-family: "AppleSDGothicNeoEB00";
    font-size: 44px;
    margin-top: 70px;
  }
  button {
    width: 80%;
    height: 85px;
    margin-top: 25px;
    cursor: pointer;
    font-size: 34px;
    font-family: "AppleSDGothicNeoEB00";
    transition: 2s;
  }
  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
    & {
      background-color: red;
    }
  }
`;
