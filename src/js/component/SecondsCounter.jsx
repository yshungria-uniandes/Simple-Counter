import React from "react";
import propTypes from "prop-types";

const Counter = (props) => {
  return (
    <div className="BigDiv">
      <div><i class="far fa-clock"></i></div>
      <div>{Math.floor(props.number / 100000 % 10)}</div>
      <div>{Math.floor(props.number / 10000 % 10)}</div>
      <div>{Math.floor(props.number / 1000 % 10)}</div>
      <div>{Math.floor(props.number / 100 % 10)}</div>
      <div>{Math.floor(props.number / 10 % 10)}</div>
      <div>{Math.floor(props.number % 10)}</div>
    </div>
  );
};

Counter.defaultProps = {
  number: 0
}
Counter.propTypes = {
  number: propTypes.number
}

export default Counter;