//Index.cy.js
//Ha a backend működik megjelenik a szöveg
describe('Index.js teszt', () => {
  it('Backend oldal betöltése', () => {
    cy.visit('http://localhost:8000')

    cy.contains('Mozi Adatbázis').should('be.visible')
  })
})

