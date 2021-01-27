import React from 'react'
import ReactDOM from 'react-dom'
import Fund from "./Fund"
import TestRenderer, {create, act} from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fund savings={0} onChange={jest.fn()} />, div);
})

it('updates shows input field when clicking change button and shows previous savings when canceling', async () => {
  // Render the Fund component
  let testRenderer
  await act(async () => {
    testRenderer = create(<Fund savings={0} onChange={jest.fn()} />)
  })

  const testInstance = testRenderer.root

  // Expect savings text to be "$ 0.00"
  expect(testInstance.findByProps({id: "amount"}).children[0]).toBe('$ ')
  expect(testInstance.findByProps({id: "amount"}).children[1]).toBe('0.00')

  const changeButton = testInstance.findByProps({id: "changeFundButton"})

  // Click on the change button
  await act(async () => {
    changeButton.props.onClick()
  })

  // Expect the amount text not being rendered
  expect(() => testInstance.findByProps({id: "amount"})).toThrow()

  const fundInput = testInstance.findByProps({id: "amountInput"})

  // Expect an input with focus
  expect(fundInput.props.autoFocus).toBe(true)

  // Expect Change Button not being rendered
  expect(() => testInstance.findByProps({id: "changeFundButton"})).toThrow()

  const cancelButton = testInstance.findByProps({id: "cancelFundChangeButton"})

  // Click on the cancel button
  await act(async () => {
    cancelButton.props.onClick()
  })

  // Expect change input not to be rendered
  expect(() => testInstance.findByProps({id: "amountInput"})).toThrow()

  // Expect savings text to be "$ 0.00"
  expect(testInstance.findByProps({id: "amount"}).children[0]).toBe('$ ')
  expect(testInstance.findByProps({id: "amount"}).children[1]).toBe('0.00')
})

it('updates the savings text when changing the savings input and presing ENTER', async () => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  await ReactTestUtils.act( async () => {
    ReactDOM.render(<Fund savings={0} onChange={jest.fn()} />, container);
  })

  const changeButton = container.querySelector('#changeFundButton')

  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.click(changeButton)
  })

  const savingsInput = container.querySelector('#amountInput')

  // Input one number
  savingsInput.value = 2
  // Change value and press 2 Key
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(savingsInput)
    ReactTestUtils.Simulate.keyPress(savingsInput, {key: "2", keyCode: 50, which: 50})
  })

  // Expect the input to be editable
  expect(container.querySelector('#amount')).toBe(null)

  const newValue = 2.55
  savingsInput.value = newValue

  // Change value and press Enter Key
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(savingsInput)
    ReactTestUtils.Simulate.keyPress(savingsInput, {key: "Enter", keyCode: 13, which: 13})
  })

  const savingsText = container.querySelector('#amount')

  // Expect savings text to be "$ 2.55"
  expect(savingsText.innerHTML).toBe(`$ ${newValue.toFixed(2)}`)
})
