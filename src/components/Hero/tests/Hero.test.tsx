import * as React from 'react';
import { mount } from 'enzyme';
import Hero from '../Hero';

it('renders correctly', () => {
  mount(<Hero title="Title" description="Description" background="" />);
});
