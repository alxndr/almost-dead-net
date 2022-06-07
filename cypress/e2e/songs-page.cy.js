describe('Songs page', () => {
  beforeEach(() => {
    cy.visit('/songs')
  })

  it('lists songs with number-of-times-performed', () => {
    cy.get('main').find('a').contains('"Mason\'s Children"')
      .closest('tr')
      .find('td').contains(/\d/)
  })

  it('lists suite names', () => {
    cy.get('main').contains('Weather Report')
      .closest('tr').contains(/Prelude|Part I/)
  })

  it('lists teases', () => {
    cy.get('main').find('h1').contains('Songs Teased')
    cy.log('shows song author name')
    cy.get('main').contains('Link Wray')
    cy.get('main').find('a').contains('"Flight of the Bumblebee"')
  })

  it('has table of contents', () => {
    cy.get('main').find('.tableofcontents').contains('Table of Contents')
      .closest('div').find('a')
  })
})
