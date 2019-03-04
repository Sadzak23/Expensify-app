import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {moment(createdAt).format("DD.MMM.YY.")}</p>
  </div>
);

export default ExpenseListItem;