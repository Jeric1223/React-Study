import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieApi = () => {
  const [movieDataState, setMovieDataState] = useState([]);
  const getMovieData = async () => {
    try {
      const movieData = await axios.get(
        "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=eafc7a0b979af6b6e408d83249ca1ad6&movieCd=20124079"
      );
      setMovieDataState(movieData);
      console.log(movieDataState);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return <div></div>;
};

export default MovieApi;
