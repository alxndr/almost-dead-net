describe('Fan Stats page', () => {
  beforeEach(() => {
    cy.visit('/fan-stats')
    cy.get('main')
      .as('main')
  })

  it('renders', () => {
    cy.title()
      .should('include', 'Fan Stats')
    cy.get('@main')
      .contains('Fan Stats')
    cy.get('@main')
      .find('input[type=text]')
      .should('have.attr', 'placeholder', 'your username on The Lot')
    cy.get('@main')
      .find('button')
      .contains('generate stats')
  })

  describe.skip('(SKIPPED — forum is dead) entering a username', () => {
    it('shows some totals', () => {
      cy.log('note: entering username all-lowercase')
      cy.get('@main')
        .find('input[type=text][placeholder*=username]')
        .type('theengineer')
      cy.get('@main')
        .find('button')
        .contains('stats')
        .click()
      cy.log('note: username is capitalized according to account data')
      cy.get('@main')
        .contains(`@TheEngineer's Fan Stats`)
      cy.get('@main')
        .contains(/\d{2} shows/)
        .contains(/\d{2} venues/)
        .contains(/\d{3} different songs/)
        .contains(/\d{2} unique songs teased/)
      cy.url()
        .should('contain', '?username=theengineer')
    })
  })

})
