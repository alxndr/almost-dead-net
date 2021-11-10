const SEC =1000

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main').as('main')
  })

  it('renders', () => {
    cy.get('@main').contains('JRAD')
    cy.get('@main').contains('2013')
  })

  it('lists the first show', () => {
    cy.get('@main').find('li.showsbyyear--2013').as('year2013').contains('2013')
    cy.get('@year2013').find('a').contains('1/26')
  })

  it('links to About page', () => {
    cy.get('footer').find('a').contains('About').click()
    cy.log('navigating to About page')
    cy.wait(SEC) // eslint-disable-line cypress/no-unnecessary-waiting
    cy.get('main').find('h1').contains('About Almost-Dead.net')
  })

  it('includes Song Finder', () => {
    cy.get('@main').contains('Find a song')
    cy.get('@main').find('input[placeholder*="song name"]').type('Phish')
    cy.log('results are shown in a box below the input')
    cy.get('main').as('main') // refresh alias
    cy.get('@main').contains('Also Sprach Zarathustra')
    cy.get('@main').contains('Foam')
    cy.get('@main').contains('Bathtub Gin').click()
    cy.log('navigating to Song page')
    cy.wait(SEC) // eslint-disable-line cypress/no-unnecessary-waiting
    cy.get('main').contains('within Shakedown Street')
  })
})
