const isSampling = !Cypress.env('VALIDATE_ALL')

describe('data validation', () => {
  let shows;
  beforeEach(() => {
    global.console.log(Cypress.env())
    shows = Cypress.env('shows')
    global.console.log({shows})
  })
  describe(`when isSampling = ${isSampling}`, () => {
    const timestamp = String(Date.now());
    shows
      .filter(([id]) => !isSampling || timestamp.includes(id))
      .forEach((show) => {
        const [id, date, _venue_id, _set1, _set2, _set3, _encore1, _encore2, _soundcheck, _notes, _event, _links, _numrecordings, tagline] = allShows[show.id]
        it(`#${id} is ${date} @ ${tagline}`, () => {
          cy.visit(`/show/${id}`)
          cy.get('main')
            .find('h1')
            .as('h1')
          cy.get('@h1')
            .contains(date)
          cy.get('@h1')
            .contains(tagline)
        })
      })
  })
})
