import Axios from "axios";

const MainURL = "	https://kapi.kakao.com";

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
