const SEC = 1000 // msec

describe('All Guests page', () => {
  it('is linked from the homepage', () => {
    cy.visit('/')
    cy.contains('All Guests').click()
    cy.log('navigating to All Guests page')
    cy.wait(SEC)
    cy.get('main').contains('John Altieri')
    cy.get('main').contains('Bob Weir')
  })
})
