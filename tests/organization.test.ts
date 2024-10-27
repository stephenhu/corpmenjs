import { Organization } from "../src/organization";

const emps = ["stephen", "becky", "laura", "joe", "chris",
  "james", "deandre"];


describe("testing player relation", () => {

  let r = new Organization();

  emps.forEach((e) => {
    r.addEmployee(e);  
  })
  
  r.createRelation("becky", "laura");

  test("get status between becky and laura", () => {
    expect(r.getStatus("becky", "laura")).toEqual(0)
  });

});

describe("increment status by 10", () => {

  let r = new Organization();

  emps.forEach((e) => {
    r.addEmployee(e);  
  })
  
  r.createRelation("becky", "laura");

  r.incrementStatus("becky", "laura", 10);

  test("get status between becky and laura", () => {
    expect(r.getStatus("becky", "laura")).toEqual(10)
  });

});

describe("increment by 5 decrement status by 10", () => {

  let r = new Organization();

  emps.forEach((e) => {
    r.addEmployee(e);  
  })

  r.createRelation("becky", "laura");

  r.incrementStatus("becky", "laura", 5);
  r.incrementStatus("becky", "laura", -10);

  test("get status between becky and laura", () => {
    expect(r.getStatus("becky", "laura")).toEqual(0)
  });

});

describe("add direct reports", () => {

  let r = new Organization();

  emps.forEach((e) => {
    r.addEmployee(e);  
  });

  r.createRelation("becky", "laura");

  r.addDirectReport("stephen", "james");
  r.addDirectReport("stephen", "laura");

  test("get status between becky and laura", () => {
    expect(r.getDirectReports("stephen").length).toEqual(2);
    expect(r.getDirectReports("stephen")).toContain("laura");
    expect(r.getDirectReports("stephen")).toContain("james");
  });

});

describe("no direct reports", () => {

  let r = new Organization();

  emps.forEach((e) => {
    r.addEmployee(e);  
  });

  test("get status between becky and laura", () => {
    expect(r.getDirectReports("stephen").length).toEqual(0);
  });

});
