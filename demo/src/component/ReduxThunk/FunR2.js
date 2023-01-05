import React from "react";
import { connect } from "react-redux";

// =================================================
const mapStateToProps = (state) => {
  return {
    count: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "plus" }),
    decri: () => dispatch({ type: "Minus" }),
  };
};
// ===============================================

function FunR2({ count, increment, decri }) {
  return (
    <div>
      {count}
      <button
        onClick={() => {
          increment();
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          decri();
        }}
      >
        minus
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FunR2);
