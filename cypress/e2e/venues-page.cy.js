describe('All Venues page', () => {
  beforeEach(() => {
    cy.visit('/venues')
  })

  it('shows full names of each locale', () => {
    cy.get('main')
      .contains('California')
    cy.get('main')
      .contains('Dominican Republic')
    cy.get('main')
      .contains('Jam Cruise')
    cy.get('main')
      .contains('New Brunswick')
  })

  it('shows a count of how many shows were performed at a given venue', () => {
    cy.get('main')
      .contains('New Haven, CT: College Street Music Hall (2 shows)')
    cy.get('main')
      .contains('Fredericton, NB (Canada): Moose Light Blues Tent (1 show)')
  })
})
