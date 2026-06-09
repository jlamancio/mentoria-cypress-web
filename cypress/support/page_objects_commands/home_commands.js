
/// <reference types="cypress" />
Cypress.Commands.add('access_home_page', (page) => {
    cy.visit('/')
    cy.get('.header-logo')

    if (page === 'Cadastro') {
        cy.get('.top_header_right')
            .find('a')
            .contains('Cadastro')
            .should('be.visible')
            .click()
    }
    else {
        cy.get('.top_header_right')
            .find('a')
            .contains('Login')
            .should('be.visible')
            .click()
    }



})