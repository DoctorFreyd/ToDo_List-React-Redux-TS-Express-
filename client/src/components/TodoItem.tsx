import React from "react";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { clear, decrement, incriment } from "../features/todoRedux/todoSlice";

const TodoItem: React.FC = () => {
  // const counter = useAppSelector((state) => state.todo.counter);
  // const dispatch = useAppDispatch();

  // function handleIncrimentClick() {
  //   dispatch(incriment());
  // }
  // function handleDecrementClick() {
  //   dispatch(decrement());
  // }
  // function handleClearClick() {
  //   dispatch(clear());
  // }
  return (
    <div className="bg-dark">
      <h1 className="text-center text-light">ToDo Item</h1>
      {/* <h1 className="btn btn-success">{counter}</h1>
      <button className="btn btn-warning" onClick={handleIncrimentClick}>
        +
      </button>
      <button className="btn btn-info" onClick={handleDecrementClick}>
        -
      </button>
      <button className="btn btn-danger" onClick={handleClearClick}>
        clear
      </button> */}
    </div>
  );
};

export default TodoItem;
