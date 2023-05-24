/// <reference types="cypress" />

describe('k6 shop', () => {
  

  it('register with same email', () => {
    cy.contains('My account').click();
    cy.get('#reg_email').type('ceva@gmail.com', {delay: 0});
    
    cy.get('button[name="register"]').click();
    cy.findByText('An account is already registered with your email address.').should('be.visible');
    // cy.contains(' An account is already registered with your email address. ').should('be.visible');
  })

  xit('register test', () => {
    cy.contains('My account').click();
    cy.get('#reg_email').type('wweeceva@gmail.com');
    cy.get('button[name="register"]').click();
    cy.contains('Log out').should('be.visible');
  })
})