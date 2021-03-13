import styled, { keyframes } from "styled-components";
import asas from "../../assets/Throwing_Stars.png";

export const test = keyframes`
  0% {
    margin-left: 0px;
  }
  50% {
    margin-left: 1000px;
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
    background-image: url(${asas});
    background-repeat: no-repeat;
    animation: ${test} 2s;
    margin-bottom: 50px;
  }
`;
