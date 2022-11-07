/// <reference types="cypress" />

describe('login curn positive flow', () => {

  it('Verify login when entering valid username and password', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.url('https://katalon-demo-cura.herokuapp.com/').should('contains', 'demo')

    cy.get('#menu-toggle > .fa').click()

    cy.get('.sidebar-nav > :nth-child(4) > a').click()

    cy.get('#txt-username').type('John Doe').should('be.visible')
    cy.get('#txt-password').type('ThisIsNotAPassword').should('be.visible')
  
    cy.get('#btn-login').click()

    cy.get('#menu-toggle > .fa').click()
    cy.get('.sidebar-nav > :nth-child(3) > a').click()

    cy.get('#menu-toggle > .fa').click()
    cy.get(':nth-child(4) > a').click()

    cy.get('#menu-toggle > .fa').click()
    cy.get('.sidebar-nav > :nth-child(5) > a').click()
    cy.get(':nth-child(3) > .btn').click()

    
  })
  
  })