import { Selector, t } from "testcafe";

export default class SearchResultsPage {
  followResult = async result => {
    await t.click(Selector("a").withText(result));
  };
}
