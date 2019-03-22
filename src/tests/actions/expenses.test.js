import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense,
  setExpenses,
  startEditExpense,
  startSetExpenses,
  startRemoveExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'testuid';
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
  expensesData[id] = { description, note, amount, createdAt }
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test("Should setup Remove Expense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123"
  });
});

test("Should remove expense from firebase", (done) => {
  const store = createMockStore({auth: { uid }});
  const id = expenses[1].id;
  store.dispatch(startRemoveExpense(expenses[1])).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy()
      done();
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

test("Should edit expense from firebase", (done) => {
  const store = createMockStore({auth: { uid }});
  const id = expenses[1].id;
  const updates = { amount: 12000 };

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "EDIT_EXPENSE",
      id,
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
  });
});

test("Should setup Add Expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test("Should add expense to database and store", (done) => {
  const store = createMockStore({auth: { uid }});
  const expenseData = {
    description: 'Mouse',
    amount: 300,
    note: 'Note',
    createdAt: 1500
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
  });
});

test("Should add expense with defaults to database and store", (done) => {
  const store = createMockStore({auth: { uid }});
  const defaultExpenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpenseData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultExpenseData);
      done();
  });
});

test("Should setup Set Expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("Should fetch the expenses from firebase", (done) => {
  const store = createMockStore({auth: { uid }});
  store.dispatch(startSetExpenses()).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});
