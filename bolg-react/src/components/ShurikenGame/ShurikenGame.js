import { findAllByDisplayValue } from "@testing-library/dom";
import React, { useState } from "react";
import * as S from "./style";

const ShurikenGame = () => {
  const [animation, setAnimation] = useState(true);

  const onClick = (e) => {
    if (animation === true) {
      setAnimation(false);
      const buttonInterval = setInterval(() => {
        setAnimation(true);
      }, 2000);
      setTimeout(function () {
        clearTimeout(buttonInterval);
      }, 2001);
    }
  };

  return (
    <S.MainWrapper>
      <div
        className="asas"
        style={animation ? { animationName: "test" } : {}}
      ></div>
      <button
        onClick={onClick}
        style={animation === false ? { background: "gray" } : {}}
      >
        {animation === true ? "던지기" : "되돌아 오는중"}
      </button>
    </S.MainWrapper>
  );
};

export default ShurikenGame;
