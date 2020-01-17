import React from 'react';
import { render, fireEvent, cleanup, queryByText } from '@testing-library/react';
import * as rtl from '@testing-library/react'

// from useIncrement
// handle increment has two arguments (value and limi).
// - It checks what the 'value' is and increments it by one until it the 2nd arg 'limit' **if**
// - **else** it sets the value to zero 
// - it depends on slices of state in display.js
// import { handleIncrement } from './hooks/useIncrement.js';
// from Display
//foul ball - if strike is less than 2 it increments strike, else, returns null.
// hitReset - when clicked sets both state values to zero.
import {hitReset, foulBall } from './display.js';
import expectExport from 'expect';
import App from '../App';




afterEach(cleanup)




test('Renders are working for buttons in dashboard', () => {
  const wrapper = rtl.render(
    <App />
  )
  const element = queryAllByText(/strike/i)
  expect(element).toBeVisible()
  expect(element).toBeInTheDocument()
})

