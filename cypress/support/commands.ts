/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
    return cy.fixture('example.json').as('usersData').then((usersData)=>{
        cy.get('input[name="email"]').type(usersData.email);
        cy.get('input[name="password"]').type(usersData.password);
        cy.get('button[name="login-button"]').click();
        cy.url().should('include', '/home');
      });   
});