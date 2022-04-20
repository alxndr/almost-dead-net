const SEC = 1000 // msec

describe('All Songs page', () => {
  beforeEach(() => {
    cy.visit('/songs')
  })

  it('lists songs with number-of-times-performed', () => {
    cy.get('main').contains('"Mason\'s Children" ×3')
  })

  it('lists suite names', () => {
    cy.get('main').contains('"At a Siding" Terrapin suite')
  })

  it('lists teases', () => {
    cy.get('main').contains('Songs Teased')
    cy.get('main').contains('"Rumble" Link Wray')
    cy.get('main').contains('"Flight of the Bumblebee" Nikolai Rimsky-Korsakov')
  })
})
