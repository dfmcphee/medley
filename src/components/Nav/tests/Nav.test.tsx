import * as React from 'react';
import { mount } from 'enzyme';
import Nav from '../Nav';

it('renders correctly', () => {
  const branding = <div>Test</div>;
  const items = [
    {
      url: '#',
      content: 'Test',
    }
  ];

  mount(<Nav branding={branding} items={items} />);
});
