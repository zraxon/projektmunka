//DataChange.cy.js
const bcrypt = require('bcryptjs');

//A telefonszám módosítása backenden keresztül
describe('Telefonszám módosítás teszt', () => {
    it('PATCH /modositTel végpont tesztelése', () => {
        cy.request({
            method: 'PATCH',
            url: 'http://localhost:8000/modositTel',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3p0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1NTk4NzMzLCJleHAiOjE3MTU2ODUxMzN9.elbyKbxuBQzvtGbR5lTLd1QYFAdXwB2LTVWkSWKCHhY'
            },
            body: {
                Uj_Telefonszam: '00000000'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    });
});

//Az adószám módosítása backenden keresztül
describe('Adószám módosítás teszt', () => {
    it('PATCH /modositAdo végpont tesztelése', () => {
        cy.request({
            method: 'PATCH',
            url: 'http://localhost:8000/modositAdo',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3p0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1NTk4NzMzLCJleHAiOjE3MTU2ODUxMzN9.elbyKbxuBQzvtGbR5lTLd1QYFAdXwB2LTVWkSWKCHhY'
            },
            body: {
                Uj_Adoszam: '11111111'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    });
});

//Jelszó tesztje backenden keresztül
describe('Jelszó módosítás teszt', () => {
    it('PATCH /modositJelszo végpont tesztelése', () => {
        const newPassword = 'newpassword';
        const hashedPassword = bcrypt.hashSync(newPassword, 10);

        cy.request({
            method: 'PATCH',
            url: 'http://localhost:8000/modositJelszo',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3p0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1NTk4NzMzLCJleHAiOjE3MTU2ODUxMzN9.elbyKbxuBQzvtGbR5lTLd1QYFAdXwB2LTVWkSWKCHhY'
            },
            body: {
                Uj_Jelszo: hashedPassword
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    });
});

//Profilkép módosítása backenden keresztül
describe('Profil kép módosítás teszt', () => {
    it('PATCH /modositPkep végpont tesztelése', () => {
        cy.request({
            method: 'PATCH',
            url: 'http://localhost:8000/modositPkep',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3p0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1NTk4NzMzLCJleHAiOjE3MTU2ODUxMzN9.elbyKbxuBQzvtGbR5lTLd1QYFAdXwB2LTVWkSWKCHhY'
            },
            body: {
                Uj_Pkep: 'https://cdn.pixabay.com/photo/2023/08/12/13/03/avatar-8185558_1280.png'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    });
});