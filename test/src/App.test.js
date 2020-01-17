import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { sum } from './App';


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('sums two numbers', () => {
  // let num1 = 1
  // let num2 = 3
  // let expected = 4

  // let actual = sum(num1, num2)

  expect(sum(2,2)).toBe(4)
})
