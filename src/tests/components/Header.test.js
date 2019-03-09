import React from 'react'
import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'
import jest from 'jest'
import ExpenseList from '../../components/ExpenseList'

test("Should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  console.log(shallow(<ExpenseList />));
  

  //expect(wrapper.find('h1').text()).toBe('Expencify App')

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
