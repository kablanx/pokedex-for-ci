/* global cy */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  baseUrl: 'http://localhost:1234',
  tests: [
    {
      describe: 'Pokedex',
      it: 'frontpage can be opened',
      test: function() {
        cy.visit('http://localhost:5000')
        cy.contains('Pikachu')
        cy.contains('Pokemon and Pokemon character names are trademarks of')
      }
    }
  ]
})


