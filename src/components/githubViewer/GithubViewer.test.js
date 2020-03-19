import React from 'react';
import { shallow } from 'enzyme';
import GithubViewer from './GithubViewer';
import { Provider } from 'react-redux';
import store from '../../store';

describe('GithubViewer component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><GithubViewer /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
