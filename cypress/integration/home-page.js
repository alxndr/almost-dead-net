describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('main')
      .as('main')
  })

  it('renders', () => {
    cy.get('@main')
      .contains('JRAD')
    cy.get('@main')
      .contains('2013')
  })

  it('lists the first show', () => {
    cy.get('@main')
      .find('li.showsbyyear--2013')
      .as('year2013')
      .contains('2013')
    cy.get('@year2013')
      .find('a')
      .contains('1/26')
  })

  it('links to About page', () => {
    cy.get('footer')
      .find('a')
      .contains('About the Site')
      .click()
    cy.wait(9999) // eslint-disable-line cypress/no-unnecessary-waiting
    cy.get('main')
      .find('h1')
      .contains('About Almost-Dead.net')
  })

  it.skip('includes Song Finder', () => {
  })
})
