import React from "react";
import AddForm from "./AddForm";
import Workout from "./Workout";


//props로 넘길 때 파라미터로 따로 작성하지 않아도 넘어감 - 동일한 함수 선언 불가
const Workouts = ({ workouts, onIncrement, onDecrement, onDelete, onAdd }) => {
  const handleIncrement = (item) => {
    console.log("Workouts===>"+item)
    onIncrement(item);
  };
  const handleDecrement = (item) => {
    onDecrement(item)
  };
  const handleDelete = (item) => {
    onDelete(item)
  };
  const handleAdd = (name) => {
    onAdd(name)
  };

  return (
    <>

    <div className="habits" >
      <AddForm onAdd={handleAdd}/>
      <ul>
        {workouts.map((item, index) => (
          /*<h3 key={item.id}>{`${item.name}${item.count}`}</h3> */
          <Workout key={index} workout={item}//
          onIncrement={handleIncrement} 
          onDecrement={handleDecrement} 
          onDelete={handleDelete}
           />
          ))}
      </ul>
      </div>
      {/* <li className='habit'>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fas fa-minus-square"></i>
        </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
      </button>
     </li> */}
    </>
  );
};

export default Workouts;
