//BelépésTeszt.cy.js
describe('Belépés tesztelése', () => {
    //Oldal betöltés
    before('Oldal betöltés', () => {
        cy.visit('http://localhost:5173')
    })
    //Belépés ablak teszt
    it('Felhasználó belépés teszt',()=>{
        cy.get('button.border:nth-child(1)').should('have.text','Belépés').click()
        cy.get('#kibe > div:nth-child(1) > h2:nth-child(1)').should('have.text','CinemaCloud')
        cy.get('label[for="E_mail2"]').should('have.text', 'E-mail cím')
        cy.get('label[for="Jelszo2"]').should('have.text', 'Jelszó')

        //Belépés
        cy.wait(1000);
        cy.get('#E_mail').type('VarVi@gmail.com')
        cy.get('#Jelszo').type('vavi123')
        cy.get('div.justify-between:nth-child(3) > button:nth-child(1)').should('have.text','Belépés').click()

        //Vetítés oldal teszt
        cy.get('a.border:nth-child(1)').contains('Vetítések').click()
        cy.get('.mb-10').should('have.text','Vetítések')

        //Vetítésben lévő film kártya betöltésének tesztje
        cy.get('div.bg-white:nth-child(2) > div:nth-child(2) > h1:nth-child(2)').should('have.text','Az – Második fejezet ')

        //Kosárba tétel teszt 
        cy.get('div.bg-white:nth-child(2) > div:nth-child(3) > button:nth-child(1)').should('have.text','Kosárba').click()

        //Bele került e a kosárba?
        cy.get('img.flex').click()
        cy.get('ul.text-white > li:nth-child(2) > a:nth-child(1)').should('have.text','Kosár').click()
        cy.get('img.flex').click()
        cy.get('div.bg-white:nth-child(2) > div:nth-child(2) > h1:nth-child(2)').should('have.text','Az – Második fejezet ')

        //Törlöm a kosárból
        cy.get('button.text-2xl:nth-child(2)').should('have.text','Törlés').click()
        
        //Jegyárak gomb és oldala teszt
        cy.contains('a.border:nth-child(2)', 'Jegyárak').should('be.visible').click()
        cy.get('div.bg-gray-400:nth-child(2)').within(() => {
            cy.get('h1').should('have.text', 'Típus: 2D')
            cy.get('h2').should('have.text', 'Ár: 1999 FT')
        })
        cy.get('div.bg-gray-400:nth-child(3)').within(() => {
            cy.get('h1').should('have.text', 'Típus: 3D')
            cy.get('h2').should('have.text', 'Ár: 2999 FT')
        })
        cy.get('div.bg-gray-400:nth-child(4)').within(() => {
            cy.get('h1').should('have.text', 'Típus: IMAX')
            cy.get('h2').should('have.text', 'Ár: 3999 FT')
        })
        cy.get('div.bg-gray-400:nth-child(5)').within(() => {
            cy.get('h1').should('have.text', 'Típus: SCREENX')
            cy.get('h2').should('have.text', 'Ár: 4999 FT')
        })
    })
})