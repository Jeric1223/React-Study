import React from "react";
import ShurikenGame from "./components/ShurikenGame/ShurikenGame";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ShurikenGame />
    </>
  );
};

export default App;
