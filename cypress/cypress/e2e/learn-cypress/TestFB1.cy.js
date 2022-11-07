/// <reference types="cypress" />

describe('login curn positive flow', () => {

  it('Verify login when entering valid username and password', () => {
    cy.visit('https://id-id.facebook.com/')
    cy.url('https://id-id.facebook.com/')

    cy.get('.fcb > a').click()

    cy.get('[data-testid="open-registration-form-button"]').click()

    cy.get('#day').select('12', {force: true}).should('be.visible')

    cy.get('#month').select('Jan', {force: true}).should('be.visible')

    cy.get('#year').select('1998', {force: true}).should('be.visible')
  
    //cy.contains('Make Appointment').should('be.visible')
    //cy.get('#btn-make-appointment').click()
  
    //cy.get('#txt-username').type('John Doe').should('be.visible')
    //cy.get('#txt-password').type('ThisIsNotAPassword').should('be.visible')
  
    //cy.get('#btn-login').click()
  
    //cy.get('h2').should('be.visible')

    //cy.get('select').select('Hongkong CURA Healthcare Center')
    
  })
  
  })