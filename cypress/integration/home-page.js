const SEC = 1000

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders', () => {
    cy.get('main').contains('JRAD')
    cy.get('main').contains('2013')
    cy.get('main').contains('2022')
  })

  it('lists the first show', () => {
    cy.get('main').find('li.showsbyyear--2013').as('year2013').contains('2013')
    cy.get('@year2013').find('a').contains('1/26')
  })

  describe('Links section', () => {
    it.skip('is linked from the homepage', () => {
      cy.contains('All Guests').click()
      cy.log('navigating to All Guests page')
      cy.wait(SEC)
      cy.url().should('eq', '/guests')
      cy.title().should('include', 'Guests')
    })
  })

  it('footer links to About page', () => {
    cy.get('footer').find('a').contains('About').click()
    cy.log('navigating to About page')
    cy.url().should('match', /\/about$/)
    cy.title().should('include', 'About')
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
