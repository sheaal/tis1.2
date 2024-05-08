describe('Create vacancy Test',() => {
    it ('Create vacancy test',() => {
        cy.fixture('empNeeds').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод логина')
            cy.get(".form-input--text").type(data.login)
            cy.log('Ввод пароля')
            cy.get(".form-input--password").type(data.password)
            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()
            cy.wait(1500)
            
            cy.log('Заходим в раздел "Потребности"')
            cy.get(':nth-child(6) > .menu-item__item-name').click()
            cy.log('Кликаем на создание потребности')
            cy.get('.needs-block__filters-wrapper > .button').click()
            cy.log('Прописываем название потребности')
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text').type(data.need_name, { force: true })
            cy.log('Выбираем зарплату')
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > .radio-component__label').click()
        
            cy.log('Прописываем тип занятости')
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-select > :nth-child(2) > .form-select__selected').click()
            cy.get('.form-select__items > :nth-child(1)').click()
            
        })
    })
})