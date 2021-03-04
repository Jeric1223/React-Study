import Axios from "axios";

const MainURL = "http://15.164.102.79c:8080";

export function request(method, url, header, data) {
  return Axios({
    method,
    url: MainURL + url,
    headers: header,
    data: data,
  })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}
