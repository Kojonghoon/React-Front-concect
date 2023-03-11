import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/LoginPage';
import BoardPage from './components/page/BoardPage';
import DeptPage from './components/page/DeptPage';
// import DeptPage from './components/page/DeptPage';
import EmpPage from './components/page/EmpPage';
import FireDeptPage from './components/page/FireDeptPage';
import HackerNewsPage from './components/page/HackerNewsPage';
import HomePage from './components/page/HomePage';
import WorkoutPage from './components/page/WorkoutPage';
import YotubePage from './components/page/YotubePage';

//index.js에서 브라우저 라우터로 감싸진 App태그 속성값으로 넘어온 주소번지를 받는다.
const App=({authLogic})=> {
  console.log('App')

  // 상수값 - > axios(NodeJS, React-모듈화), fetch(바닐라-브라우저 지원) 공통점: 비동기 처리
  const [items, setItems]=useState([
    {id:1, name:'벤치프레스', count:0},
    {id:2, name:'랫풀다운', count:0},
    {id:3, name:'스쿼트', count:0},
  ]);

  //@param1 - 콜백함수임 - 객체
//@param2 - 의존성 배열 - Dependency Array
//:의존성 배열이 비어있으면 최초 App 컴포넌트가 렌더링(what?, where?) 될 때 딱 한번만 실행 된다
//재렌더링이 되는 대상은 return안에 있는 코드들이다.
// 만일 items가 변경되면 그때는 재 랜더링 일어남.
  useEffect(()=>{
    console.log('effect 호출')
  },[])

  const handleIncrement = (item) => {
    const index = items.indexOf(item);
    items[index].count +=1;
    setItems([...items])
  }
  const handleDecrement = (item) => {
    const index = items.indexOf(item);
    const count = items[index].count-1
    items[index].count = count<0 ? 0:count
    setItems([...items])
  }

  const handleDelete = (item) => {
    console.log(`handleDelete${item.name}`)
    const workouts = items.filter(workout=>workout.id!= item.id)
    setItems([...workouts])
  }

  const handleAdd = (name) => {
    //AddForm화면에서 사용자가 입력한 운동 이름을 받아온다
    //세번재 파라미터는 0으로 초기화
    //스프레드 연산자를 활용하여 기존 배열에 한개의 객체를 추가하는 코드
    const workouts = [...items,{id:Date.now(), name, count:0}]
    //상태 훅에 반영 - spread연산자를 활용하여 새로운 주소번지 채번되도록 처리해야 함
    //상태값이 변경되었다는 사입을 리액트레서 인지할 수 있다.
    setItems([...workouts])
  }


  //사용자 정의 컴포넌트에서 return 다음에 오는 코드가 element의 집합
  //router이용하면 SPA(single page application) 누릴 수 있다.

  
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<LoginPage authLogic={authLogic}/>}/>
      <Route path='/home/:userId' exact={true} element={<HomePage authLogic={authLogic} />}/>
      <Route path='/board' exact={true} element={<BoardPage authLogic={authLogic}/>}/>
      <Route path='/workout' exact={true} element={<WorkoutPage authLogic={authLogic}
      workouts={items} onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        />} />
      <Route path='/hackernews' exact={true} element={<HackerNewsPage authLogic={authLogic}/>}/>
      <Route path='/youtube' exact={true} element={<YotubePage authLogic={authLogic}/>}/>
      <Route path='/dept/:id' exact={true} element={<FireDeptPage authLogic={authLogic}/>}/>
      <Route path='/emp/:id' exact={true} element={<EmpPage authLogic={authLogic}/>}/>
    </Routes>
    </>
  );
}

export default App;
