//EmailChange.cy.js
//Email cím módosítása
describe('Email módosítás teszt', () => {
    it('PATCH /modositEmail végpont tesztelése', () => {
        cy.request({
            method: 'PATCH',
            url: 'http://localhost:8000/modositEmail',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3p0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzE1NTk4NzMzLCJleHAiOjE3MTU2ODUxMzN9.elbyKbxuBQzvtGbR5lTLd1QYFAdXwB2LTVWkSWKCHhY'
            },
            body: {
                Uj_Email: 'newemail@example.com'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});