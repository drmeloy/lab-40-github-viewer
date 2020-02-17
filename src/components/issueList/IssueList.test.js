import React from 'react';
import { shallow } from 'enzyme';
import IssueList from './IssueList';
import { Provider } from 'react-redux';
import store from '../../store';

describe('IssueList component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><IssueList /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
