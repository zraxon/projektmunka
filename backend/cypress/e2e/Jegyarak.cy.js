//Jegyarak.cy.js
//Jegyárak tartalmának tesztelése
describe('Jegyárak lekérése teszt', () => {
    it('GET /jegyarak végpont tesztelése', () => {
      cy.request('GET', 'http://localhost:8000/jegyarak')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.include.members([
            { "TPS_Tipus": "2D", "AR": 1999 },
            { "TPS_Tipus": "3D", "AR": 2999 },
            { "TPS_Tipus": "IMAX", "AR": 3999 },
            { "TPS_Tipus": "SCREENX", "AR": 4999 }
          ]);
        });
    });
  });