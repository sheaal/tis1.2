describe('Auth Test',() => {
    it('None-existent login test',() => {
        cy.fixture('studentAuth').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод логина')
            cy.get(".form-input--text").type(data.login)
            cy.log('Ввод пароля')
            cy.get(".form-input--password").type(data.password)
            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()
        })
    });
})