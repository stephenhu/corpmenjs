import { meterUp } from "../src/generator";


describe("testing generator increment", () => {

  test("instatiation of class should not be null", () => {
    expect(meterUp(0.1)).toBeGreaterThanOrEqual(0)
  });

  test("random intelligence greater equal to 0", () => {
    expect(meterUp(0.0125)).toBeGreaterThan(0)
  });

});
