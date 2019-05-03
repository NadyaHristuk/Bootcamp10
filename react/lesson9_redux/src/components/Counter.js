import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../redux/counterActions";

const Counter = ({ value, increment, decrement, reset }) => (
  <div>
    <h1>{value}</h1>
    <div>
      <button onClick={() => increment(5)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  value: JSON.stringify(state)
});

const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
