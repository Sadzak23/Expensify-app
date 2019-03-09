import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test("Should setup Remove Expense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123"
  });
});

test("Should setup Edit Expense action object", () => {
  const action = editExpense("123765", { description: "new desc", amount: 12000 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123765",
    updates: {
      description: "new desc",
      amount: 12000
    }
  });
});

test("Should setup Add Expense action object with provided values", () => {
  const expenseDate = {
    description: "Car",
    note: "New car",
    amount: 50000,
    createdAt: 10000
  }
  const action = addExpense(expenseDate);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses: {
      id: expect.any(String),
      ...expenseDate
    }
  });
});

test("Should setup Add Expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});