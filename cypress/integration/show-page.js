describe('Show page', () => {
  beforeEach(() => {
    cy.visit('/show/38')
  })

  it('Song info', () => {
    cy.get('main')
      .find('a')
      .as('links')
      .contains('Mama Tried')
    cy.get('@links')
      .contains('Help on the Way')
    cy.get('@links')
      .contains('Slipknot!')

    cy.log('FTP marker')
    cy.get('main')
      .find('.setlist__set-1 > ol > li:first-child')
      .contains('first')

    cy.log('Tease')
    cy.get('main')
      .find('.setlist__songteases')
      .hover()
    cy.contains('Estimated Prophet tease')

    cy.log('tracklist notes')
    cy.get('main')
      .find('.setlist__songnote')
      .hover()
    cy.contains('broken pedal')
  })
})
