import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} /> {/* 이렇게 하면 경로가 완벽히 똑같을때만 컴포넌트를 보여주게 되어 이슈가 해결됩니다. */}
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
