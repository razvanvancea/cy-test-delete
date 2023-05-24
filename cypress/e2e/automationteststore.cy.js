/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('automationteststore shop', () => {
  

beforeEach(() => {
    cy.visit('https://automationteststore.com/');
})

  it('add to cart', () => {
    cy.get('#featured div.list-inline > div:first-child a.productcart').click();
    cy.get('ul.topcart').trigger('mouseover');
    cy.get('a[title="Checkout"]').click();
    cy.get('input[value="guest"]').click();
    cy.get('button[title="Continue"]').click();
})
})