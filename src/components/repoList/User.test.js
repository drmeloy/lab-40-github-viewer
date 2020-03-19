import React from 'react';
import { shallow } from 'enzyme';
import User from './User';
import { Provider } from 'react-redux';
import store from '../../store';

describe('User component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><User /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
