/// <reference types="cypress" />

describe('login curn positive flow', () => {

  it('Verify login when entering valid username and password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').should('contains', 'demo')

    cy.get('.orangehrm-login-forgot > .oxd-text').click()

    cy.get('.oxd-input').type('wildan12').should('be.visible')

    cy.get('.oxd-button--secondary').click()

    cy.get('.oxd-text--h6').should('be.visible')
    
  })
  
  })