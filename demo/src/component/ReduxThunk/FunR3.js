import React from "react";
import { connect } from "react-redux";

// ==============================================
const mapStateToProps = (state) => {
  return {
    count: state.counter,
  };
};

const Increment = () => {
  return { type: "plus" };
};
// ===============================================

function FunR3({ count, Increment }) {
  return (
    <div>
      {count}

      <button
        onClick={() => {
          Increment();
        }}
      >
        plus
      </button>
    </div>
  );
}

export default connect(mapStateToProps, { Increment })(FunR3);
