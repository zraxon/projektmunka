//Főoldal.cy.js
describe('User login kezdőlap tesztek', () => {

  //Oldal betöltése
  beforeEach('Oldal betöltés', () => {
    cy.visit('http://localhost:5173')
  })

  //Oldal logójának megjelenése
  it('Oldal logó megjelenik', () => {
    cy.get('.border-b > a:nth-child(1)').find('img').should('be.visible')
  })

  //menüpontok láthatóságának tesztelése
  it('"Vetítések" szöveg megjelenik', () => {
    cy.get('a.border:nth-child(1)').should('contain.text', 'Vetítések')
  })
  it('"Jegyárak" szöveg megjelenik', () => {
    cy.get('a.border:nth-child(2)').should('contain.text', 'Jegyárak')
  })
  it('"Belépés" szöveg megjelenik', () => {
    cy.get('button.border:nth-child(1)').should('contain.text', 'Belépés')
  })
  it('"Regisztráció" szöveg megjelenik', () => {
    cy.get('button.border:nth-child(2)').should('contain.text', 'Regisztráció')
  })
  it('Oldal keresősáv szöveg megjelenik', () => {
    cy.get('input.border:nth-child(1)').should('have.attr', 'placeholder', 'Érdekel egy film? Keress rá itt.')
  })
})

describe('Film kártya ellenőrzése', () => {

  //Oldal betöltése
  beforeEach('Oldal betöltés', () => {
    cy.visit('http://localhost:5173')
  })

  //Film kártyán az adatok megjelenésének tesztelése
  it('Film kártya ellenőrzése', () => {
    //Az oldal betöltött-e
    cy.url().should('include', 'localhost:5173')
    //Létezik a film
    cy.get('div.flex.items-center.justify-center a[href="/filmek/1"]').should('exist')
    //Látható-e a kép
    cy.get('div.flex.items-center.justify-center a[href="/filmek/1"] img').should('be.visible')
    //Láthatóak-e a film adatai
    cy.get('div.flex.items-center.justify-center a[href="/filmek/1"] p').should('contain.text', 'Az – Második fejezet')
    cy.get('div.flex.items-center.justify-center a[href="/filmek/1"] span').first().should('contain.text', '2019')
    cy.get('div.flex.items-center.justify-center a[href="/filmek/1"] div.h-28 span').should('contain.text', 'A Vesztesek Klubja legyőzte a kísérteties Pennywise bohócot, túlélte a felfoghatatlan kalandot, tagjai szétszóródtak – felnőttek. De mindannyian tudják, hogy nem hagyhatják maguk mögött a múltjukat.')
    cy.get('div.flex.items-center.justify-center a[href="/filmek/1"] div.font-black span.text-yellow-500').should('contain.text', 'Értékelés')
    cy.get('div.flex.items-center.justify-center a[href="/filmek/1"] div.font-black span.text-3xl').should('contain.text', '5.5')
  })
})

describe('Linkek', () => {
  //Oldal betöltése
  beforeEach('Oldal betöltés', () => {
    cy.visit('http://localhost:5173')
  })


  it('oldalváltás ellenőrzés', () => {

    //Mined kattintható elem tesztelése
    cy.get('a.border:nth-child(1)').should('have.text', 'Vetítések').click()
    cy.wait(1000)
    cy.get('a.border:nth-child(2)').should('have.text', 'Jegyárak').click()
    cy.wait(1000)
    cy.get('.w-46').click()
    cy.wait(1000)
    cy.get('button.border:nth-child(1)').should('have.text', 'Belépés').click()
    cy.wait(1000)
    cy.get('button.border:nth-child(1)').should('have.text', 'Belépés').click()
    cy.wait(1000)
    cy.get('button.border:nth-child(2)').should('have.text', 'Regisztráció').click()
    cy.wait(1000)
    cy.get('button.border:nth-child(2)').should('have.text', 'Regisztráció').click()
    cy.wait(1000)
    cy.get('div.swiper-slide:nth-child(1) > a:nth-child(1)').click()
    cy.wait(1000)
    cy.get('.w-46').click()
    cy.wait(1000)
    cy.get('.mt-40 > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)').click()
    cy.wait(1000)
    cy.get('.w-46').click()
  })

})