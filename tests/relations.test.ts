import { Relations } from "../src/relations";

const emps = ["stephen", "becky", "laura", "joe", "chris"];

describe("testing player relation", () => {

  let r = new Relations();

  r.addEmployee("stephen");
  r.addEmployee("becky");
  r.addEmployee("laura");
  
  r.create("becky", "laura");

  test("get status between becky and laura", () => {
    expect(r.get("becky", "laura")).toEqual(0)
  });

});

describe("ballad of ricky bobby", () => {

  let r = new Relations();

  r.addEmployee("stephen");
  r.addEmployee("becky");
  r.addEmployee("laura");
  
  r.create("becky", "laura");

  r.increment("becky", "laura", 10);

  test("get status between becky and laura", () => {
    expect(r.get("becky", "laura")).toEqual(10)
  });


});
