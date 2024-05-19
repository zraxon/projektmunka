//Kosarteszt.cy.js
//Kosar tesztelése
describe('Kosarak teszt', () => {
    let token;
  
    //Bejelentkezünk ahoz, hogy lássuk a kosarat
    before(() => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
          E_mail: 'teszt@example.com',
          Jelszo: 'tesztjelszo'
        }
      }).then((response) => {
        token = response.body.token;
      });
    });
  
    //Kosár végpont tesztelése
    it('GET /kosarak végpont tesztelése', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8000/kosarak',
        headers: {
          //Figyelem a token 24h-ig érvényes
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3p0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1Njc3Mjg0LCJleHAiOjE3MTU3NjM2ODR9.PhOVrdzSEHtoyRHWLaU8Ov1cyLb7bkfear0IXhYCpXk`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    //Új kosár végpont tesztelése
    it('POST /ujkosar végpont tesztelése', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/ujkosar',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3p0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1Njc3Mjg0LCJleHAiOjE3MTU3NjM2ODR9.PhOVrdzSEHtoyRHWLaU8Ov1cyLb7bkfear0IXhYCpXk`
        },
        body: {
          VTS_Id: 5,
          VSO_E_mail: 'teszt@example.com',
          darabszam: 2
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    //Kosártörlés végpont tesztelése
    it('DELETE /torolkosar végpont tesztelése', () => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/torolkosar',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3p0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1Njc3Mjg0LCJleHAiOjE3MTU3NjM2ODR9.PhOVrdzSEHtoyRHWLaU8Ov1cyLb7bkfear0IXhYCpXk`
        },
        body: {
          Datum: '2024-05-14',
          VTS_Id: 5
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });