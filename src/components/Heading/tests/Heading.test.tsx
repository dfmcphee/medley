import * as React from 'react';
import { mount } from 'enzyme';
import Heading from '../Heading';

it('renders correctly', () => {
  mount(<Heading>Test</Heading>);
});
