import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <Link className="expense-list-item" to={`/edit/${id}`}>
    <div className="expense-list-exp">
      <h3>{description}</h3>
      <p>{moment(createdAt).format("DD. MMMM YYYY.")}</p>
    </div>
      <h3 className="expense-list-amount">{numeral(amount).format('$0,0.00')}</h3>
  </Link>
);

export default ExpenseListItem;