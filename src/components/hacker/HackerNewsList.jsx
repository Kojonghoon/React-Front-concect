import React from "react";
import Pagination from "./Pagination";
/*
HackerNEwsPage에서 조회된 결과를 가지고 페이징 처리에 필요한 연산을 수행하여
필요한 정보를 HackerNewsList에 props로 넘겨야함
데이터셋에 배열 객체이므로 배열의 내장 함수들을 활용할 수 있을 것임
*/
const HackerNewsList = (props) => {
  const { newsList, newsPerPage, totalNews, paginate } = props;
  console.log("HackerNewsList의 newsList " + newsList.length); //10
  console.log("HackerNewsList의 newsPerPage " + newsPerPage); //10
  console.log("HackerNewsList의 totalNews " + totalNews); //30
  console.log("HackerNewsList의 paginate " + paginate); //함수출력
  return (
    <>
      <div>
        {newsList &&
          Object.keys(newsList).map((key) => (
            <li key={key}> [id:{newsList[key].id}]
              &nbsp;{newsList[key].title}
            </li>
          ))}
      </div>
      <Pagination newsPerPage={newsPerPage} totalNews={totalNews} paginate={paginate} />
    </>
  );
};
export default HackerNewsList;
