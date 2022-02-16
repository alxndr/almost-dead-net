describe('All Guests page', () => {
  beforeEach(() => {
    cy.visit('/guests')
    cy.title().contains('JRAD — Guests')
    cy.url().should('eq', '/guests')
  })

  it('lists names', () => {
    cy.get('main').contains('John Altieri')
    cy.get('main').contains('Bob Weir')
  })

  it('lists instruments', () => {
    cy.get('main').contains('trombone')
    cy.get('main').contains('vocal antics')
  })
})
