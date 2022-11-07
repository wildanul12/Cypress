/// <reference types="cypress" />

describe('login curn Negative flow', () => {

  it('Verify login when entering nothing (blank)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.url('https://opensource-demo.orangehrmlive.com/').should('contains', 'demo')
  
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ').should('be.visible')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(' ').should('be.visible')
  
    cy.get('.oxd-button').click()
  
    cy.get('.oxd-text--h5').should('be.visible')
  
  })
  
  })