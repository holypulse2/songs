import React from 'react';
import { render } from '@testing-library/react';
import SongCard from '.';

test('renders correctly', () => {
  const component = render(<SongCard imgSrc="test" text="test" />);
  expect(component).toMatchSnapshot();
});
