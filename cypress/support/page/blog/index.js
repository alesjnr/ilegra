/// <reference types ="cypress"/>
import { EL_HOME_PAGE_BLOG } from './elements';

class HomePageBlog {
  clickInSearchButton() {
    cy.get(EL_HOME_PAGE_BLOG.buttonSearch).click();
  }

  validateSearchInputFieldIsVisible() {
    cy.get(EL_HOME_PAGE_BLOG.inputSearch).eq(0).should('be.visible');
  }

  searchForTerm(term) {
    cy.get(EL_HOME_PAGE_BLOG.inputSearch).eq(0).type(term);
    this.clickInSubmitSearchButton();

  }

  clickInSubmitSearchButton() {
    cy.get(EL_HOME_PAGE_BLOG.buttonSubmitSearch).eq(0).click();
  }

  validateItHasArticleWithTheSpecifiedTerm(term) {
    cy.get(EL_HOME_PAGE_BLOG.article).find('a').contains(term).should('be.visible');
  }

  validateThereAreVisibleArticles() {
    cy.get(EL_HOME_PAGE_BLOG.article).should('be.visible');
  }

  validateThereAreNoArticles() {
    cy.get(EL_HOME_PAGE_BLOG.article).should('not.exist');
  }
}

export default new HomePageBlog();
