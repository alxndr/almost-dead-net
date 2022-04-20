const SEC = 1000 // msec

Cypress.Commands.add('clickNextShow', () => {
  cy.get('main')
    .find('a')
    .contains('Next show')
    .click()
  cy.wait(SEC) // eslint-disable-line cypress/no-unnecessary-waiting
})

Cypress.Commands.add('urlMatchesRoute', (routeStr) => {
  cy.url({timeout: 15 * SEC})
    .should('match', new RegExp(`${routeStr.startsWith('/') ? '' : '/'}${routeStr}/?$`))
})
