import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders link to Twitter account', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('@AlmostDeadNet on Twitter');
  expect(linkElement).toBeInTheDocument();
});
