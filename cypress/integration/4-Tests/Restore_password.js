describe('автотест на проверку логики восстановления пароля', function () {
   it('Проверка авторизации ', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type ('alegorbun@yandex.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })
})




