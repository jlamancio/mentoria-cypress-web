/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'
import register_page from '.././support/page_objects/register_page'


describe('Feature: Cadastramento de usuário', () => {
    const validName = faker.person.fullName()
    const validEmail = faker.internet.email()
    const validPassword = faker.internet.password()

    beforeEach(() => {
        cy.access_home_page('Cadastro')
    })
    it('CT001 - Cadastro realizado com sucesso', () => {

        register_page(validName, validEmail, validPassword)

        cy.get('#swal2-title').contains('Cadastro realizado!').should('be.visible')
        cy.get('#swal2-html-container').contains(`Bem-vindo ${validName}`).should('be.visible')
        cy.get('.swal2-actions').contains('OK').should('be.visible').click()

    })

    it('CT002 - Nome em branco', () => {
        register_page(null, validEmail, validPassword)
        cy.get('#errorMessageFirstName').contains('O campo nome deve ser prenchido')
    })

    it('CT003 - E-mail em branco', () => {
        register_page(validName, null, validPassword)
        cy.get('#errorMessageFirstName').contains('O campo e-mail deve ser prenchido corretamente')
    })

    it('CT004 - Senha em branco', () => {
        register_page(validName, validEmail, null)
        cy.get('#errorMessageFirstName').contains('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('CT005 - Todos os campos em branco', () => {
        register_page(null, null, null)
        cy.get('#errorMessageFirstName').contains('O campo nome deve ser prenchido')
    })

    it('CT006 - E-mail inválido', () => {
        register_page(validName, 'meu_email$teste.com', validPassword)
        cy.get('#errorMessageFirstName').contains('O campo e-mail deve ser prenchido corretamente')
    })

    it('CT007 - Senha inválida', () => {
        register_page(validName, validEmail, '12345')
        cy.get('#errorMessageFirstName').contains('O campo senha deve ter pelo menos 6 dígitos')
    })


})