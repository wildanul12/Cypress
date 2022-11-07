/// <reference types="cypress" />

describe('login curn Negative flow', () => {

  it('Verify login when entering invalid userid and invalid password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.url('https://opensource-demo.orangehrmlive.com/').should('contains', 'demo')
  
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('wildan').should('be.visible')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('wildan123').should('be.visible')
  
    cy.get('.oxd-button').click()
  
    cy.get('.oxd-text--h5').should('be.visible')
  
  })
  
  })