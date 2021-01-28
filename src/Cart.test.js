import React from 'react'
import ReactDOM from 'react-dom'
import Cart from "./Cart"
import ReactTestUtils from 'react-dom/test-utils'

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactTestUtils.act( async () => {
    ReactDOM.render(<Cart savings={0} wishListAmount={0} onChange={jest.fn()}/>, div)
  })
})

it('adds items to the wishlist list and it updates amount', async () => {
  // Render de component
  const container = document.createElement('div')
  document.body.appendChild(container)
  await ReactTestUtils.act( async () => {
    ReactDOM.render(<Cart savings={0} wishListAmount={0} onChange={jest.fn()}/>, container);
  })

  // Set expected values
  let newItemName = 'Item name'
  let newItemQty = 2
  let newItemPrice = 10.5

  // Query input elements and change values, firing change events
  const nameInput = container.querySelector('#input-item-name')
  nameInput.value = newItemName
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(nameInput)
  })
  const qtyInput = container.querySelector('#input-item-qty')
  qtyInput.value = newItemQty
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(qtyInput)
  })
  const priceInput = container.querySelector('#input-item-price')
  priceInput.value = newItemPrice
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(priceInput)
  })

  // Submit the form
  const itemAddForm = container.querySelector('#itemAddForm')
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.submit(itemAddForm)
  })

  let newTotal = newItemQty * newItemPrice
  const wishListTotalNumber = container.querySelector('#wishListTotalNumber')

  // Query the first item added and expect it to be there
  const firstItem = container.querySelector('form[data-id="1"]')
  expect(firstItem).not.toBeUndefined()

  // Expect the input to render the new wishlist amount
  expect(wishListTotalNumber.innerHTML).toBe(`$ ${newTotal.toFixed(2)}`)

  // Add another Item
  newItemName = 'Second Item name'
  newItemQty = 12
  newItemPrice = 100.39

  // Change values, firing change events
  nameInput.value = newItemName
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(nameInput)
  })
  qtyInput.value = newItemQty
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(qtyInput)
  })
  priceInput.value = newItemPrice
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(priceInput)
  })

  // Submit the form
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.submit(itemAddForm)
  })

  newTotal = newTotal + (newItemQty * newItemPrice)

  // Query the second item added and expect it to be there
  const secondItem = container.querySelector('form[data-id="2"]')
  expect(secondItem).not.toBeUndefined()

  // Expect the input to render the new wishlist amount
  expect(wishListTotalNumber.innerHTML).toBe(`$ ${newTotal.toFixed(2)}`)

})

it('removes the only item from the wishlist list and it updates amount to 0.00', async () => {
  // Render de component
  const container = document.createElement('div')
  document.body.appendChild(container)
  await ReactTestUtils.act( async () => {
    ReactDOM.render(<Cart savings={0} wishListAmount={0} onChange={jest.fn()}/>, container);
  })

  // Set expected values
  let newItemName = 'Item name'
  let newItemQty = 2
  let newItemPrice = 10.5

  // Query input elements and change values, firing change events
  const nameInput = container.querySelector('#input-item-name')
  nameInput.value = newItemName
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(nameInput)
  })
  const qtyInput = container.querySelector('#input-item-qty')
  qtyInput.value = newItemQty
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(qtyInput)
  })
  const priceInput = container.querySelector('#input-item-price')
  priceInput.value = newItemPrice
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(priceInput)
  })

  // Submit the form
  const itemAddForm = container.querySelector('#itemAddForm')
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.submit(itemAddForm)
  })

  // Query the first item added and expect it to be there
  let firstItem = container.querySelector('form[data-id="1"]')
  expect(firstItem).toBeDefined()

  // Remove the item
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.submit(firstItem)
  })

  // Query the first item added and expect it NOT to be there
  firstItem = container.querySelector('form[data-id="1"]')
  expect(firstItem).toBeNull()

  // Query the wishlist amount text element
  const wishListTotalNumber = container.querySelector('#wishListTotalNumber')

  // Expect the input to render the new wishlist amount
  expect(wishListTotalNumber.innerHTML).toBe(`$ 0.00`)
})

it('removes one item from the wishlist list and it updates amount', async () => {
  // Render de component
  const container = document.createElement('div')
  document.body.appendChild(container)
  await ReactTestUtils.act( async () => {
    ReactDOM.render(<Cart savings={0} wishListAmount={0} onChange={jest.fn()}/>, container);
  })

  // Set expected values
  const firstItemName = 'Item name'
  const firstItemQty = 2
  const firstItemPrice = 10.5

  // Query input elements and change values, firing change events
  const nameInput = container.querySelector('#input-item-name')
  nameInput.value = firstItemName
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(nameInput)
  })
  const qtyInput = container.querySelector('#input-item-qty')
  qtyInput.value = firstItemQty
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(qtyInput)
  })
  const priceInput = container.querySelector('#input-item-price')
  priceInput.value = firstItemPrice
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(priceInput)
  })

  // Submit the form
  const itemAddForm = container.querySelector('#itemAddForm')
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.submit(itemAddForm)
  })

  // Query the first item added and expect it to be there
  let firstItem = container.querySelector('form[data-id="1"]')
  expect(firstItem).toBeDefined()

  // Add another Item
  const secondItemName = 'Second Item name'
  const secondItemQty = 12
  const secondItemPrice = 100.39

  // Change values, firing change events
  nameInput.value = secondItemName
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(nameInput)
  })
  qtyInput.value = secondItemQty
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(qtyInput)
  })
  priceInput.value = secondItemPrice
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.change(priceInput)
  })

  // Submit the form
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.submit(itemAddForm)
  })

  // Query the second item added and expect it to be there
  let secondItem = container.querySelector('form[data-id="2"]')
  expect(secondItem).toBeDefined()

  // Remove the first item
  await ReactTestUtils.act(async () => {
    ReactTestUtils.Simulate.submit(firstItem)
  })

  // Query the first item added and expect it NOT to be there
  firstItem = container.querySelector('form[data-id="1"]')
  expect(firstItem).toBeNull()

  // Query the second item added and expect it to be there
  secondItem = container.querySelector('form[data-id="2"]')
  expect(secondItem).toBeDefined()

  // Query the wishlist amount text element
  const wishListTotalNumber = container.querySelector('#wishListTotalNumber')

  const newTotal = secondItemQty * secondItemPrice

  // Expect the input to render the new wishlist amount
  expect(wishListTotalNumber.innerHTML).toBe(`$ ${newTotal.toFixed(2)}`)
})
