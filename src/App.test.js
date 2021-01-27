import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer, {create, act} from 'react-test-renderer'
import App from "./App"
import Header from "./Header"
import Fund from "./Fund"
import Cart from "./Cart"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})

it('renders a div with card class', () => {
  const testInstance = TestRenderer.create(<App />).root

  // query for element
  const element = testInstance.findByType("div");

  // assert that className to include btn-group
  expect(element.props.className.includes("container-fluid shadow p-3 mb-5 bg-light rounded-lg card")).toBe(true)
})

it('renders a div with a Header, an ExchangeForm and an Exchange', () => {
  const testRenderer = TestRenderer.create(<App />)
  const testInstance = testRenderer.root

  // query for element
  const element = testInstance.findByType("div")

  // assert that className to include btn-group
  expect(element.props.children[0].type.name).toBe('Header')
  expect(element.props.children[2].type.name).toBe('Fund')
  expect(element.props.children[4].type.name).toBe('Cart')
})
