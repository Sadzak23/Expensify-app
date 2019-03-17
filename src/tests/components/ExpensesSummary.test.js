import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test("Should render ExpensesSummary with 1 expense correctly", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1520} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpensesSummary with multiple expense correctly", () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={expenses.length} expensesTotal={6020} />);
  expect(wrapper).toMatchSnapshot();
});