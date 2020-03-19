import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders firebase chat heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/firebase chat/i);
  expect(headingElement).toBeInTheDocument();
});
