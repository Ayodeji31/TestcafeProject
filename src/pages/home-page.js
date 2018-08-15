import { t } from "testcafe";

export default class HomePage {
  search = async searchTerm => {
    await t.typeText('[name="q"', searchTerm).pressKey("enter");
  };
}
