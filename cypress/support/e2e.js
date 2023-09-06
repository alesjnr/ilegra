import 'cypress-plugin-steps';
import 'cypress-plugin-xhr-toggle';

const registerCypressGrep = require('@cypress/grep');
registerCypressGrep();

Cypress.on('uncaught:exception', () => {
  return false;
});
