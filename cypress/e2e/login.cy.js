/// <reference types="cypress"/>

describe('Fluxo de login', () => {

    it('Login realizado com sucesso', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('amancio.jluis@outlook.com')
        cy.get('#password').type('A@mesma')
        cy.get('#btnLogin').click()

        cy.get('#swal2-title').should('be.visible')
        cy.get('#swal2-title').should('have.text', 'Login realizado')
    
    })

    it.only('Login com e-mail e senha em branco', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    
    })

     it.only('Login senha em branco', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('meulEmail@teste.com')
        cy.get('#btnLogin').click()

        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    
    })

     it.only('Login com formato de e-mail inválido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('meulEmail$teste.com')
        cy.get('#password').type('A@mesma')
        cy.get('#btnLogin').click()
        
        cy.get('.invalid_input').should('be.visible')
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    
    })

})