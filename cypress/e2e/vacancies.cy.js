describe('Register Test',() => {
    it ('Registration test',() => {
        cy.fixture('studVacancies').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод логина')
            cy.get(".form-input--text").type(data.login)
            cy.log('Ввод пароля')
            cy.get(".form-input--password").type(data.password)
            cy.log('Клик по кнопке "Войти')
            cy.get(':nth-child(3) > .button').click()
            cy.wait(1500)

            cy.log('Переход на "Вакансии"')
            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click()

            cy.log('Ввод в поле поиска')
            cy.get('.form-input--text').type(data.search_vac)
            cy.get('div.search-input__field > .button').click()

            cy.log('Клик по кнопке выбора заработной платы')
            cy.get(':nth-child(2) > .radio-component__label').click()

            cy.log('Клик по кнопке выбора графика работы')
            cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()
            cy.get('.form-select__items > :nth-child(1)').click()

            cy.log('Клик по кнопке выбора тип занятости')
            cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click()
            cy.get('.form-select__items > :nth-child(1)').click()
        })
    })
})