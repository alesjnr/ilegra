class EnvHelper {
  getValue(pathJson) {
    return Cypress._.get(Cypress.env(), pathJson);
  }
}

export default new EnvHelper();
