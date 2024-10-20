import { Relations } from "../src/relations";


describe("testing player relation", () => {

  let r = new Relations();

  r.add("stephen");
  r.add("becky");
  r.add("laura");
  
  console.log(r.affinity.edges());
  
  let o = r.affinity.edge("becky", "laura");

  console.log(o);
  console.log(o);

  test("get bond between becky and laura", () => {
    expect(r.affinity.getEdgeAttribute("becky", "laura", "bond")).toEqual(0)
  });

});
