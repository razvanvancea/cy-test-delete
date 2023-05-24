/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('k6 shop', () => {
  

beforeEach(() => {
    cy.visit('http://ecommerce.test.k6.io/');
    cy.get('.woocommerce-store-notice__dismiss-link').click();
})

  it('register with same email', () => {
    cy.contains('My account').click();
    cy.get('#reg_email').type('ceva@gmail.com', {delay: 0});
    
    cy.get('button[name="register"]').click();
    cy.findByText('An account is already registered with your email address.').should('be.visible');
    // cy.contains(' An account is already registered with your email address. ').should('be.visible');
  })

  it('register test', () => {
    cy.contains('My account').click();
    cy.get('#reg_email').type(faker.internet.email());
    cy.get('button[name="register"]').click();
    cy.contains('Log out').should('be.visible');
  })

  it('change page', () => {
    cy.get('h1').contains('Shop');
    cy.get('#main > div:nth-child(2) > nav > ul > li:nth-child(2) > a').click();
    cy.get('#main > div:nth-child(2) > nav > ul > li:nth-child(3) > span').should('have.class', 'current');
  })

  it('add product to cart', () => {
    cy.intercept({
      method: "POST",
      url: "**=add_to_cart", //**/api/?results=10
    }).as("addToCart");

    cy.get('.products > li:first-child a.add_to_cart_button').click();
    cy.wait("@addToCart").its("response.statusCode").should("eq", 200);
    cy.get('li > a.cart-contents').click();
  })
})