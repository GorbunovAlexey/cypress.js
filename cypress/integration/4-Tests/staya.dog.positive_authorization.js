describe('автотест на проверку авторизации', function () {
   it('Проверка авторизации на staya.dog ', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link'). click();
        cy.get('.auth-form > form > [type="email"]'). type('alegorbun@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('йцук1234ЙЦУК');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
    })
})
