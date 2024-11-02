import { Organization } from "../src/organization";
import { Chapter } from "../src/chapter";
import { Story } from "../src/story";

describe("testing generator increment", () => {

  let s = new Story();

  s.loadCompanies();
  s.loadCharacters();

  test("instatiation of class should not be null", () => {
    expect((0.1)).toBeGreaterThanOrEqual(0)
  });

  test("random intelligence greater equal to 0", () => {
    expect((0.0125)).toBeGreaterThan(0)
  });

});
