/// <reference types="cypress"/>

describe('Fluxo de cadastramento de usuário', () => {

    it('Cadastro realizado com sucesso', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('#top_header').click()

        cy.get('#top_header').should('be.visible')
        cy.get('#top_header').contains('Cadastro')
  

        cy.visit('https://automationpratice.com.br/register')
        cy.get('#email').type('meu_email@teste.com')
        cy.get('#password').type('1234567899')
        cy.get('#btnRegister').click()
        
        cy.get('#btnRegister').should('be.visible')
        cy.get('#btnRegister').contains('Cadastrar')

    })
})