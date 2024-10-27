import "../src/attributes";
import { randomAttr } from "../src/generator";
import "../src/meters";
import { Employee } from "../src/employee";


describe("testing player generation", () => {

  const p = new Employee("stephen", "hu");
  
  test("instatiation of class should not be null", () => {
    expect(p).not.toBeNull()
  });

  p.seed();

  test("random intelligence greater equal to 0", () => {
    expect(p.attrs.intelligence).toBeGreaterThanOrEqual(0)
  });

});
