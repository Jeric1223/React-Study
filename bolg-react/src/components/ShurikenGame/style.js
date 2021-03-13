import styled, { keyframes } from "styled-components";
import Shuriken1Level from "../../assets/Shuriken1Level.png";
import Shuriken2Level from "../../assets/Shuriken2Level.png";

export const test = keyframes`
  0% {
    margin-left: 0px;
  }
  50% {
    margin-left: 2000px;
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
  justify-content: center;
  background-color: #5E5E5E;
  button {
    width: 200px;
    height: 50px;
    border-radius: 20px;
    &:focus {
      outline: none;
    }
  }
  .asas {
    width: 30%;
    height: 30%;
    background-image: url(${Shuriken2Level});
    background-repeat: no-repeat;
    background-size: 38%;
    animation: ${test} 2s;
    margin-bottom: 50px;
  }
`;
