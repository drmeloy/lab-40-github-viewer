import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';
import { Provider } from 'react-redux';
import store from '../../store';

describe('SearchForm component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><SearchForm /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
