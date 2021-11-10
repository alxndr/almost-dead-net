const SEC = 1000 // msec

describe('All Songs page', () => {
  beforeEach(() => {
    cy.visit('/songs')
    cy.get('main').as('main')
  })

  it('is linked from the homepage', () => {
    cy.visit('/')
    cy.contains('All Songs').click()
    cy.log('navigating to All Songs page')
    cy.wait(SEC)
    cy.get('main').contains('Songs Performed')
  })

  it('lists songs with number-of-times-performed', () => {
    cy.get('@main').contains('"Mason\'s Children" ×3')
  })

  it('lists suite names', () => {
    cy.get('@main').contains('"At a Siding" Terrapin suite')
  })

  it('lists teases', () => {
    cy.get('@main').contains('Songs Teased')
    cy.get('@main').contains('"Rumble" Link Wray')
    cy.get('@main').contains('"Flight of the Bumblebee" Rimsky-Korsakov')
  })
})
