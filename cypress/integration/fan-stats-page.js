describe('Fan Stats page', () => {
  beforeEach(() => {
    cy.visit('/fan-stats')
    cy.get('main')
      .as('main')
  })

  it('renders', () => {
    cy.get('@main')
      .contains('Fan Stats')
    cy.get('@main')
      .find('input[type=text]')
      .should('have.attr', 'placeholder', 'your username on The Lot')
    cy.get('@main')
      .find('button')
      .contains('generate stats')
  })

  describe('entering a username', () => {
    it('shows some totals', () => {
      cy.get('@main')
        .find('input[type=text][placeholder*=username]')
        .type('theengineer')
      cy.get('@main')
        .find('button')
        .contains('generate stats')
        .click()
      cy.get('@main')
        .contains(`@TheEngineer's Fan Stats`)
      cy.get('@main')
        .contains('21 shows')
        .contains('10 venues')
        .contains('130 different songs')
        .contains('94 unique songs')
    })
  })

})
