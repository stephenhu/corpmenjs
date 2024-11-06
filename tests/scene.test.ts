import { BIG_INC } from "../src/organization";
import { Scene } from "../src/scene";

describe("testing scene building", () => {

  const s = new Scene(1);

  s.addText("Welcome to " + BIG_INC + ", we are the biggest company in the world!");
  s.addText("Our main product 'Bigly' has been sold to over 200 countries and over 20 million units per month.");
  s.addText("We hire the absolute best so we expect everyone to quickly get acclimated and ready to contribute.");

  test("instatiation of class should not be null", () => {
    expect(s.texts.length).toEqual(3)
  });

});
