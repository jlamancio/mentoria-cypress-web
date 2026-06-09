/// <reference types="cypress" />

export default ((name, email, password) => {
    cy.get('.default-form-box')
        .find('label')
        .contains('Nome')
        .should('be.visible')
    cy.get('.default-form-box')
        .find('label')
        .contains('E-mail')
        .should('be.visible')
    cy.get('.default-form-box')
        .find('label')
        .contains('Senha')
        .should('be.visible')
    cy.get('#btnRegister')
        .contains('Cadastrar')
        .should('be.visible')

    cy.visit('/register')
    if (name && name.trim() !== '') {
        cy.get('#user').type(name)
    }
    if (email && email.trim() !== '') {
        cy.get('#email').type(email)
    }
    if (password && password.trim() !== '') {
        cy.get('#password').type(password)
    }
    cy.get('#btnRegister').contains('Cadastrar').click()
})



