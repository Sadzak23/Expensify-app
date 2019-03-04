import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: "25000", createdAt: -1000 }));
store.dispatch(addExpense({ description: "Gas bill", amount: "2450", createdAt: 2304 }));
store.dispatch(addExpense({ description: 'Rent', amount: "34000", createdAt: 1000 }));
// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"))
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));