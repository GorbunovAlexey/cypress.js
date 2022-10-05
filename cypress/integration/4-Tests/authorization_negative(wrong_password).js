describe('автотест на негативный кейс авторизации', function () {
   it('Проверка авторизации ', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio5');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})