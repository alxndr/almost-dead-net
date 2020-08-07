/* eslint-disable semi */

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders link to Twitter account', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('@AlmostDeadNet on Twitter');
  expect(linkElement).toBeInTheDocument();
});

test.skip('shows past years', () => {
  const { getByText } = render(<App />)
  expect(getByText('2013')).toBeInTheDocument()
  expect(getByText('2014')).toBeInTheDocument()
  expect(getByText('2015')).toBeInTheDocument()
  expect(getByText('2016')).toBeInTheDocument()
  expect(getByText('2017')).toBeInTheDocument()
  expect(getByText('2018')).toBeInTheDocument()
  expect(getByText('2019')).toBeInTheDocument()
  expect(getByText('2020')).toBeInTheDocument()
})
