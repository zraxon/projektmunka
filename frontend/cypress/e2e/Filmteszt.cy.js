//Filmteszt.cy.js
describe('Film részletes információ tesztek', () => {

  //Oldal betöltése
    before('Oldal betöltés', () => {
      cy.visit('http://localhost:5173')
    })
  
    it('Film oldalára navigálás',()=>{
      //Film képére kattintás
      cy.get('div.swiper-slide:nth-child(1) > a:nth-child(1)').click()
      //Film adatainak megjelenésének ellenörzése
      cy.get('.text-center').should('have.text', 'Az – Második fejezet')
      cy.get('h2.mb-2:nth-child(2)').should('have.text','Kategória: Horror')
      cy.get('h2.mb-2:nth-child(3)').should('have.text','Film hossza: 02:49:00')
      cy.get('h2.mb-2:nth-child(4)').should('have.text','Rendező: Andy Muschietti')
      cy.get('h2.mb-2:nth-child(5)').should('have.text', 'Szereplők: James McAvoy, Jessica Chastain, Bill Hader, Isaiah Mustafa, Jay Ryan, Bill Skarsgård, James Ransone, Andy Bean, Teach Grant, Jaeden Martell, Sophia Lillis, Finn Wolfhard, Chosen Jacobs, Jeremy Ray Taylor, Jack Dylan Grazer profilképeJack Dylan Grazer, Wyatt Oleff, Nicholas Hamilton, Javier Botet, Xavier Dolan profilképeXavier Dolan, Jess Weixler profilképeJess Weixler, Ryan Kiera Armstrong')
      cy.get('h2.mb-2:nth-child(6)').should('have.text', 'Ismertető: A Vesztesek Klubja legyőzte a kísérteties Pennywise bohócot, túlélte a felfoghatatlan kalandot, tagjai szétszóródtak – felnőttek. De mindannyian tudják, hogy nem hagyhatják maguk mögött a múltjukat. Hiába győzték le a gonoszt, ha az elpusztíthatatlan… 27 évvel később egy telefonhívás ébreszti mindannyiukat: Derryből keresik őket. Újrakezdődtek a megmagyarázhatatlan eltűnések, a kisváros utcáit és házait ismét hatalmába keríti a rettegés.\nA Vesztesek hűek egykori fogadalmukhoz: hazamennek, hogy újra szembenézzenek a lisztes képű, festett arcú, kacsázó léptű borzalommal.')

      //A film vetítésének láthatósága
      cy.get('h1.text-white').should('have.text','Közelgő vetítések:')
  
      //Ha van róla vetítés a cím megjelenik
      cy.get('.text-5xl').should('have.text','Az – Második fejezet ')
    })
  })
  