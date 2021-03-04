import React, { useEffect, useState } from "react";
import { request } from "../utils/axios";

const Test = () => {
  const [test, setTest] = useState("");

  useEffect(() => {
    try {
      const data = request("get", `/report/52`, {}, {});
      setTest(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div>
        {test.data.grade}
      </div>
    </>
  );
};

export default Test;
