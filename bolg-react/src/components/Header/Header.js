import React, { useState } from "react";
import * as S from "./style";

const Header = () => {
  const [animation, setAnimation] = useState(false);

  const onToggle = () => {
    animation === false ? setAnimation(true) : setAnimation(false);
  };

  return (
    <S.HeaderWrapper>
      <div
        className="asas"
        style={animation ? { animationName: "test" } : {}}
      ></div>
      <button onClick={onToggle}>
        {animation === true ? "던지기" : "멈추기"}
      </button>
    </S.HeaderWrapper>
  );
};

export default Header;
