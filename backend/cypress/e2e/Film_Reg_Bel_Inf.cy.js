//Film_Reg_Bel_Inf.cy.js
//Filmek végpont tesztelése
describe('filmek tesztelése', () => {
  it('GET /filmek végpont tesztelése', () => {
    cy.request('http://localhost:8000/filmek')
      .its('status')
      .should('equal', 200);
  });

  it('GET /filmek/:Id végpont tesztelése', () => {
    const filmId = 1;
    cy.request(`http://localhost:8000/filmek/${filmId}`)
      .its('status')
      .should('equal', 200);
  });
});

//Regisztráció tesztelése
describe('Regisztráció tesztelése', () => {
  it('POST /register végpont tesztelése', () => {
    const userData = {
      Vnev: "Teszt",
      Knev: "Felhasználó",
      E_mail2: "teszt@example.com",
      Telefonszam: "123456789",
      Adoszam: "1234567890",
      Jelszo2: "tesztjelszo"
    };

    cy.request({
      method: 'POST',
      url: `http://localhost:8000/register`,
      body: userData
    })
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });
});

//Bejelentkezés tesztelése
describe('Bejelentkezés tesztelése', () => {
  it('POST /login végpont tesztelése', () => {
    const loginData = {
      E_mail: "teszt@example.com",
      Jelszo: "tesztjelszo"
    };

    cy.request({
      method: 'POST',
      url: `http://localhost:8000/login`,
      body: loginData
    })
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });
});

//Adatok ellenőrzése teszt
describe('Felhasználói információk lekérése teszt', () => {
  it('Ha jó a token visszaadja a felhasználói információkat', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8000/getInfo',
      headers: {
        //A tokent naponta cserélni kell
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3p0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1ODY4NDc3LCJleHAiOjE3MTU5NTQ4Nzd9.WkHhYEmdlp0HJXN5D3L148pugCVmCy7pjfnSo90CCOc'
      }
    }).then((response) => {
      expect(response.status).to.equal(200);

      const user = response.body[0];
      expect(user).to.have.property('Vnev', 'Teszt');
      expect(user).to.have.property('Knev', 'Felhasználó');
      expect(user).to.have.property('E_mail', 'teszt@example.com');
      expect(user).to.have.property('Telefonszam', '123456789');
      expect(user).to.have.property('Adoszam', '1234567890');
      expect(user).to.have.property('pKep', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png');
    });
  });

  //Ha hibás a token hibát kapunk
  it('Hibát ad vissza hibás token esetén', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8000/getInfo',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3p0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1NTk4NzMzLCJleHAiOjE3MTU2ODU'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body).to.have.property('error', 'Érvénytelen token');
    });
  });
});