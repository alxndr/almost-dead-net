describe('Show page', () => {
  it('lists Show notes', () => {
    cy.visit('/show/85')
    cy.get('main')
      .contains('acoustic')
      .contains('longest show to date')
  })

  it('lists Recordings', () => {
    cy.visit('/show/35')
    cy.get('main')
      .find('a')
      .contains('audience')
      .should('have.attr', 'href', 'https://archive.org/details/JRAD2015-06-05.nyctaper')
  })

  it('lists Guests', () => {
    cy.visit('/show/176')
    cy.get('main')
      .contains('Red Baraat')
      .contains('Jonathan Goldberger')
  })

  it('lists Song info', () => {
    cy.visit('/show/38')

    cy.get('main')
      .find('a')
      .as('links')
      .contains('Mama Tried')
    cy.get('@links')
      .contains('Help on the Way')
    cy.get('@links')
      .contains('Slipknot!')

    //cy.log('"first time played" marker (on Mama Tried)')
    //cy.get('main')
    //  .find('.setlist__set-1 > ol > li:first-child')
    //  .contains('first')

    cy.log('Tease mark (on UJB)')
    cy.get('main')
      .find('.setlist__songteases')
      .first()
      .click() // will trigger the hover behavior
    cy.contains('Estimated Prophet tease')

    cy.log('tracklist notes')
    cy.get('main')
      .find('.setlist__songnote')
      .first()
      .click() // will trigger the hover behavior
    cy.contains('broken pedal')
  })

  it('shows a lead image', () => {
    cy.visit('/show/52')
    cy.get('main')
      .find('img', /imgur/)
  })
})
