// /// <reference types="cypress" />
// import { faker } from '@faker-js/faker';

// describe('k6 shop', () => {
  

// beforeEach(() => {
//     cy.visit('http://ecommerce.test.k6.io/');
// })

//   it('register with same email', () => {
//     cy.contains('My account').click();
//     cy.get('#reg_email').type('ceva@gmail.com', {delay: 0});
    
//     cy.get('button[name="register"]').click();
//     cy.findByText('An account is already registered with your email address.').should('be.visible');
//     // cy.contains(' An account is already registered with your email address. ').should('be.visible');
//   })

//   it('register test', () => {
//     cy.contains('My account').click();
//     cy.get('#reg_email').type(faker.internet.email());
//     cy.get('button[name="register"]').click();
//     cy.contains('Log out').should('be.visible');
//   })

//   it('search product', () => {
//     cy.get('input[placeholder="Search products…"]')
//   })
// })