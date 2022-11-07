/// <reference types="cypress" />

describe('login curn positive flow', () => {

  it('Verify login when entering valid username and password', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.url('https://katalon-demo-cura.herokuapp.com/')

    cy.get('#btn-make-appointment').click()

    cy.get('.username').type('John Doe').should('be.visible')

    cy.get('.password').type('ThisIsNotAPassword').should('be.visible')

    cy.wait(20000)

    cy.get('#btn-login').click()
    
  })
  
  })