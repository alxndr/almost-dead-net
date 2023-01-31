describe('Venue page', () => {
  beforeEach(() => {
    cy.visit('/venue/22-Brooklyn-Bowl')
  })

  it('shows name & location', () => {
    cy.get('main')
      .contains('Brooklyn Bowl')
    cy.get('main')
      .contains('Brooklyn, NY')
  })

  it('includes show count', () => {
    cy.get('main')
      .contains('30 Shows')
    cy.get('main')
      .find('a')
      .as('links')
      .contains('1/26/2013')
    cy.get('@links')
      .contains('1/26/2023')
  })
})
