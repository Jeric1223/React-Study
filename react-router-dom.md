# **react-router-dom**

* ### BrowserRouter

  react-router-dom의 라우터는 BrowserRouter와 HashRouter 두 가지가 있죠. 

  BrowserRouter는 HTML5의 **history API**를 활용하여 UI를 업데이트하고,

  HashRouter는 URL의 **hash**를 활용한 라우터입니다. 정적인(static)페이지에 적합합니다.

  보통 request와 response로 이루어지는 동적인 페이지를 제작하므로 BrowserRouter가 보편적으로 쓰입니다. 이 글에서도 BrowserRouter를 사용하겠습니다.

* ### Route 

  요청받은 pathname에 해당하는 컴포넌트를 렌더링합니다.

* ### Switch

  path의 충돌이 일어나지 않게 <Route>들을 관리합니다.

  <Swtich> 내부에 <Route>들을 넣으면

  요청에 의해 매칭되는 <Route>들이 다수 있을 때에 제일 처음 매칭되는 <Route>만 선별하여 실행하기 때문에 충돌 오류를 방지해주며, <Route>간에 이동 시 발생할 수 있는 충돌도 막아줍니다.

* ### Link

  링크를 생성합니다.

