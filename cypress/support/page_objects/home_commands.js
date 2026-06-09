
/// <reference types="cypress" />
Cypress.Commands.add('acces_home_page', () => {
      cy.visit('/')
        cy.get('.header-logo')

        cy.get('.top_header_right')
            .find('a')
            .contains('Cadastro')
            .should('be.visible')

        cy.get('.top_header_right')
            .find('a')
            .contains('Login')
            .should('be.visible')
            .click()
            
})