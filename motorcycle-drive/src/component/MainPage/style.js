import styled, { keyframes } from 'styled-components';
import backgroundImg from '../../asset/bg_img/bikebg.png';
import bikebg from '../../asset/bg_img/bikebg.png';

const movebg = keyframes`
  0%{
    background-position: 0 center;
  }
  100%{
    background-position: -1500px center;
  }
`;

const moverigth = keyframes`  
  0%{
    background-position: 0% center;
  }
  100%{
    background-position: 600% center;
  }
`;

const tirerotate = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MovingBackground = styled.div`
  width: 100%;
  height: 500px;
  background: url(${backgroundImg}) 0 center / 1500px repeat-x;
  animation: ${movebg} 4s linear infinite;
`;

export const Bike = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  .movewrap {
    max-width: 1200px;
    width: 100%auto;
    position: relative;
  }
  .movewrap > div {
    padding-bottom: 40%;
    width: 100%;
  }
  .moving {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${bikebg}) 0 center / 120% repeat-x;
    animation: ${moverigth} 2s linear infinite;
  }
  .bikeicon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .bikeicon image {
    width: 100%;
  }
  .bikeicon .tire02 {
    position: absolute;
    bottom: 3%;
    right: 2%;
    width: 26%;
    z-index: -1;
  }
  .tire-rotate {
    animation: ${tirerotate} 1s linear infinite;
  }
`;
