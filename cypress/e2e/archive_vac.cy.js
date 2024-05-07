describe('archive vacancy Test',() => {
    it ('archive vacancy test',() => {
        cy.fixture('archiveVacan').then(data => {
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
            cy.log('Кликаем на добавление вакансии в архив')
            cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-red').click()
            cy.log('Повторно кликаем на добавление вакансии в архив')
            cy.get('.desktop-modal__button-wrapper > .button__background-color-red').click()
        })
    })
})