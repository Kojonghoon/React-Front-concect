import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HackerNewsList from "../hacker/HackerNewsList";
import Bottom from "../include/Bottom";
import Header from "../include/Header";

const NewsListUL = styled.ul`
  background-color: gray;
  padding-top: 10px;
  padding-right: 6px;
  padding-left: 6px;
  padding-bottom: 18px;
`;

const HackerNewsPage = ({ authLogic }) => {
  const [newsList, setNewsList] = useState([]);
  //페이징처리에 필요한 코드
  //현재 바라보는 페이지
  const [currentPage, setCurrentPage] = useState(1);
  //한 페이지에 출력될 로우의 수
  const [newsPerPage, setNewsPerPage] = useState(10);
  //배열 객체에서 어디부터 어느 구간 까지를 잘라낼 것인가를 위한 변수 선언 및 초기화
  const indexOfLast = currentPage * newsPerPage;
  const indexOfFirst = indexOfLast - newsPerPage;
  const currentNews = (news) => {
    let currentNews = 0;
    //파라미터로 받은 배열에서 잘라내기 - slice배열 내장 함수임
    currentNews = news.slice(indexOfFirst, indexOfLast);
    return currentNews;
  };

  const NEWSURL = "https://api.hnpwa.com/v0/news/1.json";
  const navigate = useNavigate();
  const onLogout = () => {
    console.log("HomePage onLogout 호출");
    authLogic.logout();
  };

  useEffect(() => {
    axios.get(NEWSURL).then((response) => {
      console.log(response.data);
      console.log(response.data.length);
      setNewsList(response.data);
    });
  }, []);

  useEffect(() => {
    authLogic.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <>
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
    </>
  );
};

export default HackerNewsPage;
