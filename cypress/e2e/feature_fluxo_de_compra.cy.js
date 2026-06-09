/// <reference types="cypress"/>

describe('Check Out', () => {

    it('CT001 - Check Out com sucesso ', () => {

        // seleciona os elementos no DOM
        
        cy.visit('https://automationpratice.com.br/checkout-one')
        cy.get('#fname').type('Jose')
        cy.get('#lname').type('Silva')
        cy.get('#cname').type('Minha Empresa')
        cy.get('#email').type('meu-email@email.com')
        cy.get('#country').select('usa')
        cy.get('#city').select('Aland Islands')
        cy.get('#zip').type('06524000')
        cy.get('#faddress').type('Rua nova, número 2')
        cy.get('#messages').type('Mensagem de teste')

        // assertions

        cy.get('.form-group').find('#fname').should('have.value', 'Jose')
        cy.get('.form-group').find('#lname').should('have.value', 'Silva')
        cy.get('.form-group').find('#cname').should('have.value', 'Minha Empresa')
        cy.get('.form-group').find('#email').should('have.value', 'meu-email@email.com')
        cy.get('.form-group').find('#country').should('have.value', 'usa')
        cy.get('.form-group').find('#city').should('have.value', 'Aland Islands')
        cy.get('.form-group').find('#zip').should('have.value', '06524000')
        cy.get('.form-group').find('#faddress').should('have.value', 'Rua nova, número 2')
        cy.get('.form-group').find('#messages').should('have.value', 'Mensagem de teste')

    
    })
})