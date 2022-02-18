const SEC = 1000

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.title()
      .should('include', 'Almost-Dead.net')
 })

  describe('Setlists section', () => {
    beforeEach(() => {
      cy.contains('Setlists').closest('section').as('setlistsSection')
    })

    it('organized by year', () => {
      cy.get('@setlistsSection')
        .contains('2013')
      cy.get('@setlistsSection')
        .contains('2022')
    })

    it('lists the first show date', () => {
      cy.get('@setlistsSection').find('li.showsbyyear--2013').as('year2013')
        .contains('2013')
      cy.get('@year2013').find('a')
        .contains('1/26')
    })
  })

  describe('Links section', () => {
    beforeEach(() => {
      cy.contains('Links')
        .closest('section').as('linksSection')
    })

    it('links to Venues page', () => {
      cy.get('@linksSection').find('a')
        .contains('Venues')
        .click()
      cy.urlMatchesRoute('/venues')
      cy.title()
        .should('include', 'venues')
    })

    it('links to Songs page', () => {
      cy.get('@linksSection').find('a')
        .contains('Songs & Teases')
        .click()
      cy.urlMatchesRoute('songs')
      cy.title()
        .should('include', 'songs')
      cy.title()
        .should('include', 'teased')
    })

    it.skip('(SKIPPED: temporarily hiding link) links to Guests page', () => {
      cy.get('@linksSection')
        .contains('Guests')
        .click()
      cy.urlMatchesRoute('guests')
      cy.title()
        .should('include', 'Guests')
    })
  })

  describe('footer', () => {
    it('links to About page', () => {
      cy.get('footer').find('a')
        .contains('About')
        .click()
      cy.urlMatchesRoute('about')
      cy.title()
        .should('include', 'About')
    })
  })


  it('includes Song Finder', () => {
    cy.get('main').contains('Find a song')
    cy.get('main').find('input[placeholder*="song name"]').type('Phish')
    // cy.log('results are shown in a box below the input')
    // cy.wait(SEC) // eslint-disable-line cypress/no-unnecessary-waiting
    // cy.get('main').contains('Also Sprach Zarathustra') // TODO fails here
    // cy.get('main').contains('Foam')
    // cy.get('main').contains('Bathtub Gin').click()
    // cy.log('navigating to Song page')
    // cy.wait(SEC) // eslint-disable-line cypress/no-unnecessary-waiting
    // cy.get('main').contains('within Shakedown Street')
  })
})
