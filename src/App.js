import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { IncNumber, DecNumber, reset } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container my-5">
      <h2 className="display-3">INCREMENT AND DECREMENT </h2>
      <p className="display-6 text-secondary">USING REACT/REDUX</p>
      <h4>counter value is : {myState}</h4>
      <button
        className="me-2 btn btn-dark"
        onClick={() => {
          dispatch(IncNumber(5));
        }}
      >
        {" "}
        increment
      </button>
      <button className="me-2  btn btn-dark" onClick={() => dispatch(reset())}>
        reset
      </button>
      <button
        className="me-2  btn btn-dark"
        onClick={() => {
          dispatch(DecNumber());
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default App;
