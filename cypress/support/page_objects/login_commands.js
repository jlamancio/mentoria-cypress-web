/// <reference types="cypress" />


Cypress.Commands.add('login', (email, password) => {

    cy.url().should('include', '/login')
    cy.get('.account_form')
        .find('h3')
        .contains('Login')
        .should('be.visible')

    cy.get('.default-form-box')
        .find('label')
        .contains('E-mail')
        .should('be.visible')

    cy.get('.default-form-box')
        .find('label')
        .contains('Senha')
        .should('be.visible')
        
   if (email && email.trim() !== '') {
        cy.get('#user').type(email);
    }

   if (password && password.trim() !== '') {
        cy.get('#password').type(password);
    }
    cy.get('#btnLogin')
        .contains('login')
        .should('be.visible')
        .click()

})


