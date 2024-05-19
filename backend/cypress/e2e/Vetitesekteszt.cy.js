//Vetitesekteszt.cy.js
//Vetítések végpont teszt
describe('Vetítések teszt', () => {
    it('GET /vetitesek végpont tesztelése', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/vetitesek'
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(`Az összes vetítés találati száma: ${response.body.length}`);
      });
    });
    
    //Keresett vetítés végpont tesztelése
    it('GET /keresvet/:filmId végpont tesztelése', () => {
      const filmId = 1;
  
      cy.request({
        method: 'GET',
        url: `http://localhost:8000/keresvet/${filmId}`
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(`Az összes vetítés találati száma: ${response.body.length}`);
      });
    });
  });