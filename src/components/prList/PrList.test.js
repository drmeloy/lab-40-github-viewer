import React from 'react';
import { shallow } from 'enzyme';
import PrList from './PrList';
import { Provider } from 'react-redux';
import store from '../../store';

describe('PrList component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><PrList /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
