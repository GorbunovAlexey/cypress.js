describe('автотест негативный куйс на проверку авторизации', function () {
   it('Проверка авторизации на staya.dog ', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link'). click();
        cy.get('.auth-form > form > [type="email"]'). type('alegorbun@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('qwer1234QWER');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})