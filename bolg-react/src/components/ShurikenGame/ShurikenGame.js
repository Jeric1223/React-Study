import React, { useEffect, useState } from "react";
import * as S from "./style";

const ShurikenGame = () => {
  const [animation, setAnimation] = useState(true);
  const [buttonToggle, setButtonToggle] = useState(true);
  /* 로컬스토리지에 저장 */
  const [money, setMoney] = useState(
    () => JSON.parse(window.localStorage.getItem("money")) || 0
  );
  const [shurikenLevel, setShurikenLevel] = useState(
    () => JSON.parse(window.localStorage.getItem("shurikenLevel")) || 1
  );
  const [shurikenSpeed, setShurikenSpeed] = useState(
    () => JSON.parse(window.localStorage.getItem("shurikenSpeed")) || 5
  );

  const onClick = () => {
    if (animation === true) {
      setAnimation(false);
      setMoney(money + shurikenLevel * 2);
      const buttonInterval = setInterval(() => {
        setAnimation(true);
      }, shurikenSpeed * 1000);
      setTimeout(function () {
        clearTimeout(buttonInterval);
      }, shurikenSpeed * 1000);
    }
  };
  //레벨업에 따른 스팩 업
  //돈 올라가는 공식 = 돈 - 레벨 *2 *10
  //스피드가 줄어드는 공식 = 스피드 * 0.85 (완벽하지는 않음)
  const levelUp = () => {
    setShurikenLevel(shurikenLevel + 1);
    setMoney(money - shurikenLevel * 2 * 10);
    setShurikenSpeed(shurikenSpeed * 0.85);
  };

  const ButtonToggle = () => {
    buttonToggle === false ? setButtonToggle(true) : setButtonToggle(false);
    console.log("버튼 토글성공");
  };

  useEffect(() => {
    window.localStorage.setItem("money", JSON.stringify(money));
    window.localStorage.setItem("shurikenLevel", JSON.stringify(shurikenLevel));
    window.localStorage.setItem("shurikenSpeed", JSON.stringify(shurikenSpeed));
  }, [money, shurikenLevel, shurikenSpeed]);

  return (
    <S.MainWrapper>
      <h1>ShurikenGame</h1>
      <S.LevelAndMoneyBox>
        <p>Shuriken Level : {shurikenLevel}</p>
        <p>money : {money}$</p>
      </S.LevelAndMoneyBox>
      <S.Shuriken /* 수리검 이미지와 애니메이션 */
        style={animation ? { animationName: "test" } : {}}
        shuriken
        shurikenSpeed={shurikenSpeed}
      />
      <S.ButtonContainer>
        <button /* 버튼 스타일 */
          onClick={onClick}
          style={
            animation === false
              ? { background: "#161C40", color: "#0FF2B2" }
              : { background: "#0FF2B2", color: "#161C40" }
          }
        >
          {animation === true ? "Throw" : "Returning..."}
        </button>
      </S.ButtonContainer>
      <S.UpgradeWrapper>
        <S.UpgradeContainer showBox={buttonToggle}>
          <div onClick={ButtonToggle}>Upgrade</div>
          <p>
            표창을 업그레이드 합니다. 표창을 업그레이드 하면 돈이{" "}
            {shurikenLevel * 2 + 2}$로 올라갑니다. 스피드도 0.25s 상승합니다.
          </p>
          <h2>비용 : {shurikenLevel * 2 * 10}$</h2>
          <button
            onClick={money >= shurikenLevel * 2 * 10 ? levelUp : {}}
            style={
              money >= shurikenLevel * 2 * 10
                ? { background: "#0FF2B2", color: "#161C40" }
                : { background: "#161C40", color: "#0FF2B2" }
            }
          >
            {money >= shurikenLevel * 2 * 10 ? "업그레이드" : "돈이 부족합니다"}
          </button>
        </S.UpgradeContainer>
      </S.UpgradeWrapper>
    </S.MainWrapper>
  );
};

export default ShurikenGame;
