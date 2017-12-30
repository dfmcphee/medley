import * as React from 'react';
import { mount } from 'enzyme';
import Button from '../Button';

it('renders correctly', () => {
  mount(<Button>Test</Button>);
});

it('calls onClick handler if passed', () => {
  const spy = jest.fn();
  const button = mount(<Button onClick={spy}>Test</Button>);
  button.simulate('click');
  expect(spy).toHaveBeenCalled();
});
