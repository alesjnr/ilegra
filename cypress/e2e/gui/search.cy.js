/// <reference types ="cypress"/>
import EnvHelper from '@helper/envHelper';
import HomePageBlog from '@page/blog/';

describe('Search tests', { tags: ['regression', 'smoke'] }, () => {
  const alphanumericTerm = EnvHelper.getValue('terms.alphanumericTerm');
  const numericTerm = EnvHelper.getValue('terms.numericTerm');
  const invalidTerm = EnvHelper.getValue('terms.invalidTerm');

  beforeEach(() => {
    cy.visit(EnvHelper.getValue('urlBlog'));
    HomePageBlog.clickInSearchButton();
  });

  it('Click on the magnifying glass and check if the entry has been shown on the screen successfully.', () => {
    HomePageBlog.validateSearchInputFieldIsVisible();

    cy.wait(500);
    cy.screenshot('Click on the magnifying glass and check if the entry has been shown on the screen successfully.', { capture: 'runner' });
  });

  it('Searching for an alphanumeric term and an article returns successfully.', () => {
    HomePageBlog.searchForTerm(alphanumericTerm);
    HomePageBlog.validateItHasArticleWithTheSpecifiedTerm(alphanumericTerm);

    cy.wait(500);
    cy.screenshot('Searching for an alphanumeric term and an article returns successfully.', { capture: 'runner' });
  });

  it('Searching for an numeric term and an article returns successfully.', () => {
    HomePageBlog.searchForTerm(numericTerm);
    HomePageBlog.validateItHasArticleWithTheSpecifiedTerm(numericTerm);

    cy.wait(500);
    cy.screenshot('Searching for an numeric term and an article returns successfully.', { capture: 'runner' });
  });

  it('Search without a term and an article returns successfully.', () => {
    HomePageBlog.clickInSubmitSearchButton();
    HomePageBlog.validateThereAreVisibleArticles();

    cy.wait(500);
    cy.screenshot('Search without a term and an article returns successfully.', { capture: 'runner' });
  });

  it('Search for a term for which there is no article and return no articles.', () => {
    HomePageBlog.searchForTerm(invalidTerm);
    HomePageBlog.validateThereAreNoArticles();

    cy.wait(500);
    cy.screenshot('Search for a term for which there is no article and return no articles.', { capture: 'runner' });
  });
});
