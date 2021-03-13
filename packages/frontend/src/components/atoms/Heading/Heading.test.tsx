import React from 'react';
import { render } from '@testing-library/react';
import Heading from '.';

test('renders correctly', () => {
  const component = render(<Heading>Heading</Heading>);
  expect(component).toMatchSnapshot();
});
