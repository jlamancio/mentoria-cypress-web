/// <reference types="cypress"/>

describe('Fluxo de cadastramento de usuário', () => {

    it('CT001 - Cadastro realizado com sucesso', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('#top_header').click()

        cy.get('#top_header').should('be.visible')
        cy.get('#top_header').contains('Cadastro')


        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('jose da silva')
        cy.get('#email').type('meu_email@teste.com')
        cy.get('#password').type('1234567899')
        cy.get('#btnRegister').contains('Cadastrar').click()
     

        cy.get('#swal2-title').contains('Cadastro realizado!').should('be.visible')
        cy.get('#swal2-html-container').contains('Bem-vindo jose da silva').should('be.visible')
        cy.get('.swal2-actions').contains('OK').should('be.visible').click()

    })
})