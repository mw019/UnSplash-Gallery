import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import ImageDisplay from './ImageDisplay';
import SearchBar from './SearchBar';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render 1 <ImageDisplay /> element when we get an input', () => {
    expect(wrapper.find(ImageDisplay)).toHaveLength(1);
  });

  it('should render 1 <SearchBar /> element when we get an input', () => {
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });

  it('should render Header element', () => {
    const header = wrapper.find('Header');
    expect(header).toHaveLength(1);
    expect(header.prop('className')).toEqual('icon-header');
  });
});
