/// <reference types="cypress" />

describe('login curn positive flow', () => {

  it('Verify login when entering valid username and password', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.url('https://katalon-demo-cura.herokuapp.com/').should('contains', 'demo')
  
    cy.contains('Make Appointment').should('be.visible')
    cy.get('#btn-make-appointment').click()
  
    cy.get('#txt-username').type('John Doe').should('be.visible')
    cy.get('#txt-password').type('ThisIsNotAPassword').should('be.visible')
  
    cy.get('#btn-login').click()
  
    cy.get('h2').should('be.visible')
    
  })
  
  })