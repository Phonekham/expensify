import uuid from "uuid";

// Add expenses
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});
// RemoveExpense
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});
// Edit expense
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
