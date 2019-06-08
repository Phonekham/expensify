import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

// export a stateless functional component
// description, amount, createAt

const ExpenseListItem = ({ dispatch, id, description, amount, createAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount}-{createAt}
      <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </p>
  </div>
);

export default connect()(ExpenseListItem);
