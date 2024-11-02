import { Organization } from "../src/organization";
import { Chapter } from "../src/chapter";
import { Story } from "../src/story";

describe("testing generator increment", () => {

  let s = new Story();

  s.loadCompanies();
  s.loadCharacters();

  test("2 companies loaded", () => {
    expect(s.companies.length).toEqual(2)
  });

  test("x employees loaded", () => {
    expect(s.companies[0].employees.order).toEqual(10)
  });

});
