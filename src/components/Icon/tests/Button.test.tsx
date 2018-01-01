import * as React from 'react';
import { mount } from 'enzyme';
import Icon from '../Icon';

it('renders correctly', () => {
  mount(<Icon src="<svg></svg>" />);
});
