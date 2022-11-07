/// <reference types="cypress" />

describe('login curn positive flow', () => {

  it('Verify login when entering valid username and password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.url('https://opensource-demo.orangehrmlive.com/').should('contains', 'demo')

    cy.get('.orangehrm-login-forgot > .oxd-text').click()

    cy.get('.oxd-input').type(' ').should('be.visible')

    cy.get('.oxd-button--secondary').click()

    cy.get('.oxd-text--h6').should('be.visible')
    
  })
  
  })