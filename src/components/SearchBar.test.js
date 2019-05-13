import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchBar from './SearchBar';

configure({ adapter: new Adapter() });

describe('<SearchBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('should render label', () => {
    const label = wrapper.find('label');
    expect(label).toHaveLength(1);
  });

  it('should render text input with  placeholder', () => {
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('input');
    expect(input.prop('value')).toEqual('');
    expect(input.prop('placeholder')).toEqual('eg. dogs');
  });

  it('should render submit button', () => {
    const button = wrapper.find('Button');
    expect(button).toHaveLength(1);
    expect(button.prop('type')).toEqual('submit');
    expect(button.prop('className')).toEqual('fluid');
  });
});
