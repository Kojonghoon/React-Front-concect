import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Bottom from "../include/Bottom";
import Header from "../include/Header";
import DeptRow from "../dept/DeptRow";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { useNavigate } from "react-router-dom";
import HackerNewsList from "../hacker/HackerNewsList";
/*eslint-disable*/

const firebaseConfig = {
  //가자 자기 프로젝트에서 가져오기
  apiKey: process.env.REACT_APP_FS_APIKEY,
  authDomain: process.env.REACT_APP_FS_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FS_DATABASEURL,
  projectId: process.env.REACT_APP_FS_PROJECTID,
  storageBucket: process.env.REACT_APP_FS_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FS_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FS_APPID,
};

const app = initializeApp(firebaseConfig);
console.log(app);
const database = getDatabase();

const FireDeptPage = ({ authLogic }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    console.log("HomePage onLogout 호출");
    authLogic.logout();
  };

  useEffect(() => {
    authLogic.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const [depts, setDepts] = useState([]);
  useEffect(() => {
    console.log("useEffect호출");
    console.log(database);
    console.log(depts);

    const starCountRef = ref(database, "dept");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      console.log(data);
      setDepts(data);
      console.log(depts);
    });
  }, []); //옵션에 별도의 값을 지정하지 않으면 최초 한번만 실행됨
  //useEffect에서 초기화 된 상태값 출력해 보기
  console.log(depts);

  return (
    <>
      <div>
        <Header onLogout={onLogout} />
        <NewsListUL>
          <HackerNewsList
            newsList={currentNews(newsList)}
            newsPerPage={newsPerPage} //
            totalNews={newsList.length}
            paginate={setCurrentPage}
          />
        </NewsListUL>
        <Bottom />
      </div>
    </>
  );
};

export default FireDeptPage;
