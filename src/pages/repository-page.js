import { Selector } from "testcafe";

export default class RepositoryPage {
  getTitle = () => Selector("h1").textContent;
}
