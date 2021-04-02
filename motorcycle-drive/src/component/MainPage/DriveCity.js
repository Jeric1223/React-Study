import React from 'react';
import * as S from './style';
import BikeImg from '../../asset/car_img/bike.png';
import BikeWheel from '../../asset/car_img/bike-wheel.png';

const DriverCity = () => {
  return (
    <S.MainWrapper>
      <S.MovingBackground />
      <S.Bike>
        <div className="movewrap">
          <div className="bikeicon">
            <image src={BikeImg}></image>
            <image src={BikeWheel} className="tire01 tire-rotate"></image>
            <image src={BikeWheel} className="tire01 tire-rotate"></image>
          </div>
        </div>
      </S.Bike>
    </S.MainWrapper>
  );
};

export default DriverCity;
