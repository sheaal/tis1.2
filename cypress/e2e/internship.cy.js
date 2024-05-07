describe('Register Test',() => {
    it ('Registration test',() => {
        cy.fixture('studInternship').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод логина')
            cy.get(".form-input--text").type(data.login)
            cy.log('Ввод пароля')
            cy.get(".form-input--password").type(data.password)
            cy.log('Клик по кнопке "Войти')
            cy.get(':nth-child(3) > .button').click()
            cy.wait(1500)

            cy.log('Переход на "Стажировки"')
            cy.get(':nth-child(1) > .header__nav > [href="/internships"]').click()

            cy.log('Ввод в поле поиска')
            cy.get('.form-input--text').type(data.search_inter)
            cy.get('div.search-input__field > .button').click()

            cy.log('Клик по кнопке выбора оплаты')
            cy.get(':nth-child(3) > .radio-component__label').click()
            
            cy.log('Клик по кнопке выбора тип занятости')
            cy.get('.form-select__selected').click()
            cy.get('.form-select__items > :nth-child(1)').click()
        })
    })
})