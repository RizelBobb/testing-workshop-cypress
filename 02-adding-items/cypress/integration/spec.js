/// <reference types="cypress" />
it('loads', () => {
  cy.visit('localhost:3000')
  cy.contains('a', 'TodoMVC')
})

it('starts with zero items', () => {
  // check if the list is empty initially
})

it('adds two items', () => {
  // repeat twice
  // get the input field
  // type text and "enter"
  // assert that the new Todo item
  // has been added added to the list
})

it('can add many items', () => {
  const N = 5
  for (let k = 0; k < N; k += 1) {
    // add an item
  }
  // check number of items
})

it('can mark items as completed', () => {
  // add a few items
  // mark items as completed
  // select completed items and confirm their number
})

// what a challenge?
// test more UI at http://todomvc.com/examples/vue/
