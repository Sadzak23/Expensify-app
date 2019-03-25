import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
  <div className="content-container">
    <div>
      <div className="expense-list-header">
        <p className="show-mobile">Expenses</p>
        <p className="show-desktop">Expense</p>
        <p className="show-desktop">Amount</p>
      </div>
      <div className="expense-list-body">
        {
          props.expenses.length === 0 ? (
            <p className="expense-list-no-exp">No expenses</p>
          ) : (
              props.expenses.map(expense =>
                (<ExpenseListItem
                  key={expense.id}
                  {...expense}
                />))
            )
        }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList)
