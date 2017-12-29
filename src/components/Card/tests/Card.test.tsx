import * as React from 'react';
import { mount } from 'enzyme';
import Card from '../Card';

it('renders correctly', () => {
  mount(<Card />);
});

it('renders title if passed prop', () => {
  const card = mount(<Card title="Test" />);
  expect(card.find('h2')).toHaveLength(1);
});
