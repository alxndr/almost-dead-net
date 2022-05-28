describe('Song page', () => {
  beforeEach(() => {
    cy.visit('/song/201')
  })

  it('shows basic song info', () => {
    cy.get('h1')
      .contains('Slipknot!')
    cy.get('main')
      .contains('Grateful Dead')
    cy.get('h2')
      .contains(/Performed at [1-9]\d* Shows/)
  })

  describe('teases', () => {
    it('include label and links', () => {
      cy.get('h2')
        .contains('Teases')
      cy.get('a')
        .contains('2/5/2015 within The Other One')
        .should('have.attr', 'href', '/show/15')
    })
  })

  describe('segues', () => {
    it('show the preceding and following songs', () => {
      cy.get('.songpage__performances')
        .find('.sortable__cell-show')
        .contains('11/27/2015')
        .closest('tr')
        .contains('Alligator')
        .closest('td')
        .find(' + td')
        .contains('->')
        .closest('tr')
        .contains(`Franklin's Tower`)
    })
  })

  it('indicates when the song has been played multiple times within the show')
})
