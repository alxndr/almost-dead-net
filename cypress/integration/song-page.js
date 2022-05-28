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

  describe('links', () => {
    it('indicate when the song has been played multiple times within the show')
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
})
