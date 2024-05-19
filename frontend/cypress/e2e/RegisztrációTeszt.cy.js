//RegisztrációTeszt.cy.js
describe('Regisztráció tesztelése', () => {

    //Oldal betöltése
    beforeEach('Oldal betöltés', () => {
        cy.visit('http://localhost:5173')
    })

    it('Felhasználó regisztrálása teszt', () => {
        //Regisztrációs felület szövegeinek tesztelése
        cy.get('button.bg-purple-600').should('have.text', 'Regisztráció').click()
        cy.get('.p-5 > h2:nth-child(1)').should('have.text', 'CinemaCloud')
        cy.get('.p-5 > p:nth-child(2)').should('have.text', 'Kérjük regisztráljon.')
        cy.get('label[for="Vnev"]').should('have.text', 'Vezetéknév')
        cy.get('label[for="Knev"]').should('have.text', 'Keresztnév')
        cy.get('label[for="E_mail2"]').should('have.text', 'E-mail cím')
        cy.get('label[for="Telefonszam"]').should('have.text', 'Telefonszám')
        cy.get('label[for="Adoszam"]').should('have.text', 'Adószám')
        cy.get('label[for="Jelszo2"]').should('have.text', 'Jelszó')

        cy.wait(1000);
        //Felhasználó regisztrálása
        cy.get('#Vnev').type('Varga')
        cy.get('#Knev').type('Viktor')
        cy.get('#E_mail2').type('VarVi@gmail.com')
        cy.get('#Telefonszam').type('+36307381692')
        cy.get('#Jelszo2').type('vavi123')
        cy.wait(1000)
        cy.get('div.justify-between:nth-child(7) > button:nth-child(1)').should('have.text', 'Küldés').click()
    });
})