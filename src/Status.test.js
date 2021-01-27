import React from 'react'
import ReactDOM from 'react-dom'
import Status from "./Status"
import TestRenderer, { create, act } from "react-test-renderer"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Status savings={0} wishListAmount={0} />, div)
})

it('renders an empty div when savings is 0 and wishListAmount is 0', async () => {
  // Render the Status component
  let testRenderer
  await act(async () => {
    testRenderer = create(<Status savings={0} wishListAmount={0} />)
  })

  const testInstance = testRenderer.root

  // Expect empry div
  expect(testInstance.findByType('div').children.length).toBe(0)
})

it('renders spend more message when savings is 2 and is wishListAmount 1', async () => {
  // Render the Status component
  let testRenderer
  await act(async () => {
    testRenderer = create(<Status savings={2} wishListAmount={1} />)
  })

  const testInstance = testRenderer.root

  // Expect empry div
  expect(testInstance.findByProps({className: 'text-success font-weight-bold'}).children.join('')).toBe('Hurray! You still have $ 1.00 more to spend!')
})

it('renders savins depleted message when savings is 2 and is wishListAmount 2', async () => {
  // Render the Status component
  let testRenderer
  await act(async () => {
    testRenderer = create(<Status savings={2} wishListAmount={2} />)
  })

  const testInstance = testRenderer.root

  // Expect empry div
  expect(testInstance.findByProps({className: 'text-primary'}).children.join('')).toBe('Hurray! You can buy your wishlist, but you\'ll spend all of your money.')
})

it('renders moremoney needed message when savings is 1 and is wishListAmount 2', async () => {
  // Render the Status component
  let testRenderer
  await act(async () => {
    testRenderer = create(<Status savings={1} wishListAmount={2} />)
  })

  const testInstance = testRenderer.root

  // Expect empry div
  expect(testInstance.findByProps({className: 'text-danger'}).children.join('')).toBe('Sorry, you don have enough savings. You are $ 1.00 short.')
})
