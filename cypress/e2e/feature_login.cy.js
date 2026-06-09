/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Fluxo de login', () => {
    beforeEach(() => {
        cy.acces_home_page()
    })
    it.only('CT001 - Login realizado com sucesso', () => {
        const emailValido = faker.internet.email()
        const senhaValida = faker.internet.password()
        cy.login(emailValido, senhaValida)
        expect(cy.get('#swal2-title').contains('Login realizado'))
        expect(cy.get('button').contains('OK').click())
        expect(cy.get('#swal2-html-container').contains(`Olá, ${emailValido}`))

    })

    it('CT002 - E-mail em branco', () => {
        cy.login(null, faker.internet.password())
        expect(cy.get('.invalid_input').contains('E-mail inválido.'))

    })

    it('CT003 - Senha em branco', () => {
        cy.login(faker.internet.email(), null)
        expect(cy.get('.invalid_input').contains('Senha inválida.'))

    })

    it('CT004 - Usuário e senha em branco', () => {
        cy.login(null, null)
        expect(cy.get('.invalid_input').contains('E-mail inválido.'))

    })

    it('CT005 - E-mail com formato inválido', () => {
        cy.login('email_invalido$teste.com', faker.internet.password())
        expect(cy.get('.invalid_input').contains('E-mail inválido.'))

    })

    it('CT006 - Senha com formato inválido', () => {
        cy.login(faker.internet.email(), '12345')
        expect(cy.get('.invalid_input').contains('Senha inválida.'))

    })

})





