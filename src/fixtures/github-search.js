import { Selector } from "testcafe";
import HomePage from "../pages/home-page";
import SearchResultsPage from "../pages/search-results-page";
import RepositoryPage from "../pages/repository-page";

const homePage = new HomePage();
const searchResultsPage = new SearchResultsPage();
const repositoryPage = new RepositoryPage();

fixture`Github Search`.page`https://github.com`;

test("Search for react-jobs", async t => {
  await homePage.search("react-jobs");
  await searchResultsPage.followResult("ctrlplusb/react-jobs");

  await t.expect(repositoryPage.getTitle()).contains("react-jobs");
});

test("Search for react-async-component", async t => {
  await homePage.search("react-async-component");
  await searchResultsPage.followResult("ctrlplusb/react-async-component");

  await t.expect(repositoryPage.getTitle()).contains("react-async-component");
});
