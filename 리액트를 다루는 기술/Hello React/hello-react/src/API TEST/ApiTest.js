import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [newsData, setNewsData] = useState([]);

  const getNewsData = async () => {
    try {
      const data = await axios.get(
        "http://newsapi.org/v2/everything?q=tesla&from=2021-02-04&sortBy=publishedAt&apiKey=e7c928fee9fe416db82160f07eab372c"
      );
      setNewsData(data.data.articles);
      console.log(newsData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNewsData();
  });

  return (
    <>
      <div>
        {newsData.map((title) => (
          <h1 key={title.url}>{title.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Test;
