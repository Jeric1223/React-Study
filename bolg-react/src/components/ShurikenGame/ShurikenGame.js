import { findAllByDisplayValue } from "@testing-library/dom";
import React, { useEffect, useState } from "react";
import * as S from "./style";

const ShurikenGame = () => {
  const [animation, setAnimation] = useState(true);
  const [money, setMoney] = useState(
    () => JSON.parse(window.localStorage.getItem("money")) || 0
  );
  const [shurikenLevel, setShurikenLevel] = useState(
    () => JSON.parse(window.localStorage.getItem("shurikenLevel")) || 0
  );
  const [speed, setSpeed] = useState(
    () => JSON.parse(window.localStorage.getItem("speed")) || 5
  );

  const onClick = (e) => {
    if (animation === true) {
      setAnimation(false);
      setMoney(money + 1);
      const buttonInterval = setInterval(() => {
        setAnimation(true);
      }, 2000);
      setTimeout(function () {
        clearTimeout(buttonInterval);
      }, 2001);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("money", JSON.stringify(money));
    window.localStorage.setItem("shurikenLevel", JSON.stringify(shurikenLevel));
    window.localStorage.setItem("speed", JSON.stringify(speed));
  }, [money, shurikenLevel, speed]);

  return (
    <S.MainWrapper>
      <h1>ShurikenGame</h1>
      <S.levelAndMoneyBox>
        <p>Shuriken Level : {shurikenLevel}</p>
        <p>money : {money}$</p>
      </S.levelAndMoneyBox>
      <S.shuriken
        style={
          animation
            ? { animationName: "test", animationDelay: `${speed}s` }
            : {}
        }
      />
      <S.buttonContainer>
        <button
          onClick={onClick}
          style={
            animation === false
              ? { background: "#161C40", color: "#0FF2B2" }
              : { background: "#0FF2B2", color: "#161C40" }
          }
        >
          {animation === true ? "Throw" : "Returning..."}
        </button>
      </S.buttonContainer>
      <S.upgradeWrapper>
        <S.upgradeContainer>
          <div>Upgrade</div>
          <p>
            표창을 업그레이드 합니다. 표창을 업그레이드 하면 돈이{" "}
            {shurikenLevel * 2}$로 올라가고 스피드가 {shurikenLevel * 0.2}초
            정도 상승합니다.
          </p>
          <h2>비용 : {shurikenLevel * 10}$</h2>
          <button
            style={
              money >= shurikenLevel * 10
                ? { background: "#0FF2B2", color: "#161C40" }
                : { background: "#161C40", color: "#0FF2B2" }
            }
          >
            {money >= shurikenLevel * 10 ? "업그레이드" : "돈이 부족합니다"}
          </button>
        </S.upgradeContainer>
      </S.upgradeWrapper>
    </S.MainWrapper>
  );
};

export default ShurikenGame;
