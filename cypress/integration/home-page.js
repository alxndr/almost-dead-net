describe('Home page', () => {
  it('renders', () => {
    cy.visit('/')
    cy.get('main')
      .as('main')
      .contains('JRAD')
    cy.get('@main')
      .contains('2013')
  })

  it('lists the first show', () => {
    cy.visit('/')
    cy.get('main')
      .find('li.showsbyyear--2013')
      .as('year2013')
      .contains('2013')
    cy.get('@year2013')
      .find('a')
      .contains('1/26')
  })

  it('links to About page', () => {
    cy.visit('/')
    cy.get('footer')
      .find('a')
      .contains('About the Site')
      .click()
    cy.wait(999)
    cy.get('main')
      .find('h1')
      .contains('About Almost-Dead.net')
  })

  it.skip('includes Song Finder', () => {
    cy.visit('/')
  })
})
