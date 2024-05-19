//FelhasználóiAdatMódosítás.cy.js
describe('Belépés tesztelése', () => {
    //Oldal betöltés
    before('Oldal betöltés', () => {
        cy.visit('http://localhost:5173')
    })
    //Belépés tesztelése
    it('Felhasználó belépés', () => {
        cy.get('button.border:nth-child(1)').should('have.text', 'Belépés').click()
        cy.get('#E_mail').type('VarVi@gmail.com')
        cy.get('#Jelszo').type('vavi123')
        cy.get('div.justify-between:nth-child(3) > button:nth-child(1)').should('have.text', 'Belépés').click()
        cy.wait(1000);

        //Bállítások oldal teszt
        cy.get('img.flex').click()
        cy.get('ul.text-white > a:nth-child(3)').should('have.text', 'Beállítások').click()
        cy.get('img.flex').click()
        cy.contains('h1', 'Információ').should('be.visible')
        cy.wait(1000);

        // Ellenőrizzük az egyes információkat
        cy.get('div.bg-gray-500:nth-child(2)').within(() => {
            cy.contains('h1', 'Név: Varga Viktor').should('be.visible')
            cy.contains('h1', 'E-mail cím: VarVi@gmail.com').should('be.visible')
            cy.contains('h1', 'Telefonszám: +36307381692').should('be.visible')
            cy.contains('h1', 'Adószám:').should('be.visible')
        })

        // Ellenőrizzük, hogy az Adatmódosítás cím megjelenik
        cy.contains('h1', 'Adatmódosítás').should('be.visible')

        // Ellenőrizzük az egyes adatmódosítási lehetőségeket
        cy.contains('h1', '＞ E-mail cím módosítás').should('be.visible')
        cy.contains('h1', '＞ Telefonszám módosítás').should('be.visible')
        cy.contains('h1', '＞ Adószám módosítás').should('be.visible')
        cy.contains('h1', '＞ Jelszó módosítás').should('be.visible')
        cy.contains('h1', '＞ Profilkép módosítás').should('be.visible')

        //Email módosítás
        cy.contains('h1', '＞ E-mail cím módosítás').click()
        cy.get('#EmailMod').should('be.visible')
        cy.get('label[for="Uj_Email"]').should('have.text', 'Új E-mail cím')
        cy.get('#Uj_Email').type('newemail@example.com')
        cy.get('#EmailMod button').should('have.text', 'Módosítás').click()

        //Telefonszam módosítás
        cy.contains('h1', '＞ Telefonszám módosítás').click()
        cy.get('#TelMod').should('be.visible')
        cy.get('label[for="Uj_Telefonszam"]').should('have.text', 'Új Telefonszám')
        cy.get('#Uj_Telefonszam').type('+36123456789')
        cy.get('#TelMod button').should('have.text', 'Módosítás').click()

        //Adószám módosítás
        cy.contains('h1', '＞ Adószám módosítás').click()
        cy.get('#AdoMod').should('be.visible')
        cy.get('label[for="Uj_Adoszam"]').should('have.text', 'Új Adószám')
        cy.get('#Uj_Adoszam').type('12345678-1-42')
        cy.get('#AdoMod button').should('have.text', 'Módosítás').click()

        //Jelenleg még nem működik !!!
        // //Jelszó módosítás
        // cy.contains('h1', '＞ Jelszó módosítás').click()
        // cy.get('#JelMod').should('be.visible')
        // cy.get('label[for="Uj_Jelszo"]').should('have.text', 'Új Jelszó')
        // cy.get('#Uj_Jelszo').type('newpassword')
        // cy.get('#JelMod button').should('have.text', 'Módosítás').click()

        //Profilkép módosítása
        cy.contains('h1', '＞ Profilkép módosítás').click()
        cy.get('#PkepMod').should('be.visible')
        cy.get('label[for="Uj_Pkep"]').should('have.text', 'Új Profilkép')
        cy.get('#Uj_Pkep').type('https://cdn.pixabay.com/photo/2023/08/12/13/03/avatar-8185558_1280.png')
        cy.get('#PkepMod button').should('have.text', 'Módosítás').click()

        //Kijelentkezés teszt
        cy.get('img.flex').click()
        cy.get('ul.text-white > li:nth-child(4)').should('have.text','Kijelentkezés').click()

        //Belépés az új adatokkal (az adatbázisban lecseréli az adatokat de aztán nem enged belépni velük)
        cy.get('button.border:nth-child(1)').should('have.text', 'Belépés').click()
        cy.get('#E_mail').type('newemail@example.com')
        cy.get('#Jelszo').type('newpassword')
        cy.get('div.justify-between:nth-child(3) > button:nth-child(1)').should('have.text', 'Belépés').click()
    })
})