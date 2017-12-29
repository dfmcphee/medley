import * as React from 'react';
import { mount } from 'enzyme';
import TextField from '../TextField';

it('renders correctly', () => {
  mount(<TextField value="test" label="label" id="id" />);
});

it('calls onChange handler if passed', () => {
  const spy = jest.fn();
  const element = mount(<TextField id="TestField" label="Test field" value="" onChange={spy} />);
  (element.find('input') as any).instance().value = 'new-value';
  element.find('input').simulate('change');
  expect(spy).toHaveBeenCalledWith('new-value', 'TestField');
});
