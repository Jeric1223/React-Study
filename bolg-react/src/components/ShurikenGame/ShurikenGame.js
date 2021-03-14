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

  const onClick = (e) => {
    if (animation === true) {
      setAnimation(false);
      setMoney(money + 1);
      setShurikenLevel(shurikenLevel + 1);
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
  }, [money, shurikenLevel]);

  return (
    <S.MainWrapper>
      <h1>ShurikenGame</h1>
      <div className="levelAndMoneyBox">
        <p>Shuriken Level : {shurikenLevel}</p>
        <p>money : {money}$</p>
      </div>
      <div
        className="shuriken"
        style={animation ? { animationName: "test" } : {}}
      ></div>
      <div className="buttonContainer">
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
      </div>
    </S.MainWrapper>
  );
};

export default ShurikenGame;
