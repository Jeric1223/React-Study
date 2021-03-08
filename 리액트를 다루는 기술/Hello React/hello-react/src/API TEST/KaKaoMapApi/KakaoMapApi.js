import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";

const KakaoMapApi = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const Data = await axios.post(
        "https://developer-api.dsmkr.com/dsmauth/token/",
        {
          data: {
            client_id: "c80ee31d61a9497bb61e5af97a3c353a",
            client_secret: "53f156af65a349d0a9d4766dddcefa5d",
          },
          headers: {},
        }
      );
      setData(Data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <S.MainContainer>
      <p>{data}</p>
    </S.MainContainer>
  );
};

export default KakaoMapApi;
