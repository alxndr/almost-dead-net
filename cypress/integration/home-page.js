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

    it('lists the dates organized by year', () => {
      cy.get('@setlistsSection')
        .contains('2013')
        .click()
      cy.get('@setlistsSection')
        .contains('1/26')

      cy.get('@setlistsSection')
        .contains('2015')
        .click()
      cy.get('@setlistsSection')
        .contains('7/5')

      cy.get('@setlistsSection')
        .contains('2017')
        .click()
      cy.get('@setlistsSection')
        .contains('11/11')
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

    it('links to Guests page', () => {
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


  describe('Song Finder', () => {
    it('is on the page', () => {
      cy.get('.songfinder').contains('Find a song')
      cy.get('.songfinder').find('input[placeholder*="song name"]')
    })

    it.skip('shows results with link to Song page', () => {
      cy.get('.songfinder').find('input[placeholder*="song name"]').type('Phish')
      cy.wait(SEC) // eslint-disable-line cypress/no-unnecessary-waiting
      cy.get('.songfinder').contains('Also Sprach Zarathustra') // TODO fails here
      cy.get('.songfinder').contains('Foam')
      cy.get('.songfinder').contains('Bathtub Gin').click()
      cy.log('navigating to Song page')
      cy.wait(SEC) // eslint-disable-line cypress/no-unnecessary-waiting
      cy.get('main').contains('within Shakedown Street')
    })
  })
})
