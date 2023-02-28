import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthLogic from "./service/authLogic";
import firebaseApp from "./service/firebase";
//공통코드 -> service->authLogic.js->import외부 js 재사용 가능함 ->export default클래스명 -> module
//브라우저에 import하려면 반드시 babel이 필요함
/*eslint-disable*/

const authLogic = new AuthLogic(firebaseApp); //인스턴스화(파라미터가 올 수 있다.
//왜 파라미터가 필요한가? - firebaseApp ->import firebaseApp from "./sevice/firebase"; -> export dafault firebaseApp
//authLogic. 파이어베이스에서 제공하는 함수를 호출 하겠따
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* App컴포넌트를 렌더링 할 때  속성 자리에  주소번지를 넘길 수 있다. - props */}
    {/* 태그와 jS섞어쓰기 가능함 - 좌중괄호 우중괄호 */}
    <App authLogic={authLogic} />
  </BrowserRouter>
  // </React.StrictMode>
);
