import { Organization, PIXEL_CORP, BIG_INC } from "../src/organization";
import { Employee } from "../src/employee";

const emps = [
  {first: "Stephen", last: "Hu"},
  {first: "Becky", last: "smith"},
  {first: "Laura", last: "Kim"},
  {first: "Joe", last: "Ishikawa"},
  {first: "Chris", last: "McPherson"},
  {first: "James", last: "Zhang"},
  {first: "Deandre", last: "johnson"},
  {first: "Dimitry", last: "Simitov"},
  {first: "Marsh", last: "Whitmore"},
  {first: "Sylvia", last: "Morgan"},
  {first: "Abhijit", last: "Patel"}
];


describe("testing player relation", () => {

  let r = new Organization(BIG_INC);

  emps.forEach((e) => {

    let ne = new Employee(e.first, e.last);

    r.addEmployee(ne);  
  
  });

  r.createRelation("Becky.smith", "laura.kim");

  test("get status between becky and laura", () => {
    expect(r.getStatus("becky.smith", "laura.kim")).toEqual(0)
  });

});

describe("increment status by 10", () => {

  let r = new Organization(BIG_INC);

  emps.forEach((e) => {

    let ne = new Employee(e.first, e.last);

    r.addEmployee(ne);

  });
  
  r.createRelation("becky.smith", "laura.kim");

  r.incrementStatus("becky.smith", "laura.kim", 10);

  test("get status between becky and laura", () => {
    expect(r.getStatus("becky.smith", "laura.kim")).toEqual(10)
  });

});

describe("increment by 5 decrement status by 10", () => {

  let r = new Organization(BIG_INC);

  emps.forEach((e) => {

    let ne = new Employee(e.first, e.last);

    r.addEmployee(ne);

  });

  r.createRelation("becky.smith", "laura.kim");

  r.incrementStatus("becky.smith", "laura.kim", 5);
  r.incrementStatus("becky.smith", "laura.kim", -10);

  test("get status between becky and laura", () => {
    expect(r.getStatus("becky.smith", "laura.kim")).toEqual(0)
  });

});

describe("add direct reports", () => {

  let r = new Organization(PIXEL_CORP);

  emps.forEach((e) => {
    
    let ne = new Employee(e.first, e.last);

    r.addEmployee(ne);

  });

  r.createRelation("becky.smith", "laura.kim");

  r.addDirectReport("stephen.hu", "james.zhang");
  r.addDirectReport("stephen.hu", "laura.kim");

  let directs = r.getDirectReports("stephen.hu");

  test("get status between becky and laura", () => {
    expect(directs.length).toEqual(2);
    expect(directs).toContain("laura.kim");
    expect(directs).toContain("james.zhang");
  });

});

describe("no direct reports", () => {

  let r = new Organization(PIXEL_CORP);

  emps.forEach((e) => {

    let ne = new Employee(e.first, e.last);

    r.addEmployee(ne);
  
  });

  test("get status between becky and laura", () => {
    expect(r.getDirectReports("stephen.hu").length).toEqual(0);
  });

});
