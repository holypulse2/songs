import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '.';

test('renders correctly', () => {
  const component = render(<SearchBar value="test" placeholder="test" onChange={() => null} />);
  expect(component).toMatchSnapshot();
});
