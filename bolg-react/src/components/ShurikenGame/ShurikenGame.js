import React, { useEffect, useState } from "react";
import * as S from "./style";

const ShurikenGame = () => {
  const [animation, setAnimation] = useState(true);
  const [money, setMoney] = useState(
    () => JSON.parse(window.localStorage.getItem("money")) || 0
  );
  const [shurikenLevel, setShurikenLevel] = useState(
    () => JSON.parse(window.localStorage.getItem("shurikenLevel")) || 1
  );

  const onClick = (e) => {
    if (animation === true) {
      setAnimation(false);
      setMoney(money + shurikenLevel*2);
      const buttonInterval = setInterval(() => {
        setAnimation(true);
      }, 2000);
      setTimeout(function () {
        clearTimeout(buttonInterval);
      }, 2001);
    }
  };

  const levelUp = () => {
    setShurikenLevel(shurikenLevel + 1);
    setMoney(money - shurikenLevel * 26);
    console.log("도착함");
  };

  useEffect(() => {
    window.localStorage.setItem("money", JSON.stringify(money));
    window.localStorage.setItem("shurikenLevel", JSON.stringify(shurikenLevel));
  }, [money, shurikenLevel]);

  return (
    <S.MainWrapper>
      <h1>ShurikenGame</h1>
      <S.levelAndMoneyBox>
        <p>Shuriken Level : {shurikenLevel}</p>
        <p>money : {money}$</p>
      </S.levelAndMoneyBox>
      <S.shuriken style={animation ? { animationName: "test" } : {}} />
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
            {shurikenLevel * 2 + 2}$로 올라갑니다.
          </p>
          <h2>비용 : {shurikenLevel * 26}$</h2>
          <button
            onClick={money >= shurikenLevel * 26 ? levelUp : {}}
            style={
              money >= shurikenLevel * 26
                ? { background: "#0FF2B2", color: "#161C40" }
                : { background: "#161C40", color: "#0FF2B2" }
            }
          >
            {money >= shurikenLevel * 26 ? "업그레이드" : "돈이 부족합니다"}
          </button>
        </S.upgradeContainer>
      </S.upgradeWrapper>
    </S.MainWrapper>
  );
};

export default ShurikenGame;
