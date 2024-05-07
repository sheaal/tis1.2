describe('Publication vacancy Test',() => {
    it ('Publication vacancy test',() => {
        cy.fixture('publicVacan').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод логина')
            cy.get(".form-input--text").type(data.login)
            cy.log('Ввод пароля')
            cy.get(".form-input--password").type(data.password)
            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()
            cy.wait(1500)
            
            cy.log('Заходим в раздел "Вакансии"')
            cy.get(':nth-child(7) > .menu-item__item-name').click()
            cy.log('Кликаем на публикацию вакансии')
            cy.get(':nth-child(4) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click()
        })
    })
})