import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import Display from './display.js';
import Dashboard from './dashboard.js';
import expectExport from 'expect';


// from useIncrement
// handle increment has two arguments (value and limi).
// - It checks what the 'value' is and increments it by one until it the 2nd arg 'limit' **if**
// - **else** it sets the value to zero 
// - it depends on slices of state in display.js
// import { handleIncrement } from './hooks/useIncrement.js';
// from Display
//foul ball - if strike is less than 2 it increments strike, else, returns null.
// hitReset - when clicked sets both state values to zero.
// import {hitReset, foulBall } from './display.js';
// import expectExport from 'expect';
// import App from '../App';




afterEach(cleanup)




test('When the strike button is pressed it increases the value of the strike being displayed.', () => {
  const { getByText, getByTestId } = render(<Display />)
  let strikeDisplay = getByText(/strike:/i) // the h1 that changes 
  let strikeButton = getByTestId('test-strike')
  fireEvent.click(strikeButton)
  fireEvent.click(strikeButton)
  expect(strikeDisplay).toHaveTextContent('STRIKE: 2')
})

test('Headers are rendering', () => {
  const wrapper = render(<Display />)
  const header = wrapper.queryByText(/ball:/i)
  expect(header).toBeInTheDocument()
})

