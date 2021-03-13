import React from 'react';
import { render } from '@testing-library/react';
import Loading from '.';

test('renders correctly', () => {
  const component = render(<Loading />);
  expect(component).toMatchSnapshot();
});
