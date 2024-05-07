describe('Create vacancy Test',() => {
    it ('Create vacancy test',() => {
        cy.fixture('empOrg').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)
            cy.log('Ввод логина')
            cy.get(".form-input--text").type(data.login)
            cy.log('Ввод пароля')
            cy.get(".form-input--password").type(data.password)
            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()
            cy.wait(1500)
            
            cy.log('Заходим в раздел "Организация"')
            cy.get(':nth-child(4) > .menu-item__item-name').click()
            cy.log('Изменяем название организации')
            cy.get('.about-org > :nth-child(1) > .form-control--max > .form-input--text').clear()
            cy.get('.about-org > :nth-child(1) > .form-control--max > .form-input--text').type(data.org_name, { force: true })
            cy.log('Изменяем описание организации')
            cy.get('.form-area').clear()
            cy.get('.form-area').type(data.description, { force: true })
            cy.log('Изменяем контактное лицо')
            cy.get(':nth-child(3) > :nth-child(1) > .form-control--max > .form-input--text').clear()
            cy.get(':nth-child(3) > :nth-child(1) > .form-control--max > .form-input--text').type(data.face, { force: true })
            cy.log('Изменяем адрес')
            cy.get(':nth-child(3) > :nth-child(2) > .form-control--max > .form-input--text').clear()
            cy.get(':nth-child(3) > :nth-child(2) > .form-control--max > .form-input--text').type(data.address, { force: true })
            // cy.log('Изменяем номер телефона')
            // cy.get('.contacts__fields > :nth-child(1) > .form-control--max > .form-input--text').type(data.number, { force: true })
            cy.log('Изменяем электронную почту')
            cy.get('.contacts__fields > :nth-child(2) > .form-control--max > .form-input--text').clear()
            cy.get('.contacts__fields > :nth-child(2) > .form-control--max > .form-input--text').type(data.email, { force: true })
            // cy.log('Изменяем ссылку на сайт')
            // cy.get(':nth-child(3) > .form-control--max > .form-input--text').type(data.link_site, { force: true })
            cy.get('.edit-form__button > .button').click({force:true})
        })
    })
})