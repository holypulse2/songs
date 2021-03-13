import React from 'react';
import { render } from '@testing-library/react';
import Songs from '.';

test('renders correctly', () => {
  const component = render(<Songs searchText="test" onSearch ={() => null} onScroll={() => null} songs={[]} />);
  expect(component).toMatchSnapshot();
});
