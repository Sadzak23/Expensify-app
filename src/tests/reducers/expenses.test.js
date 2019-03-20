import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses'

test("Should set default filter values", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual([]);
});

test("Should Add Expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      description: "New car",
      note: "Brand new",
      amount: 15000,
      createdAt: 1500
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("Should Remove Expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test("Should not Remove Expense without valid id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "123"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should Edit Expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      amount: 1000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(action.updates.amount);
});

test("Should NOT Edit Expense without valid id", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "123asd",
    updates: {
      amount: 1000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should Set Expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});