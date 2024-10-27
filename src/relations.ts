/* corpmenjs directory.ts */

import Graph from "graphology";


export const GRAPH_TYPE             = "undirected";

export const ATTR_STATUS            = "status";

export const MAX_STATUS             = 600;
export const MIN_STATUS             = 0;


export class Relations {

  private _employees: Graph;

  constructor() {
    
    this._employees = new Graph({type: GRAPH_TYPE});

  } // constructor

  set employees(company: Graph) {
    this._employees = company;
  } // employees

  get employees(): Graph {
    return this._employees;
  } // employees

  addEmployee(id: string) {

    if (!this._employees.hasNode(id)) {

      this._employees.addNode(id);
    
    }

  } // addEmployee

  removeEmployee(id: string) {
    this._employees.dropNode(id);
  } // removeEmployee

  create(id1: string, id2: string) {

    if (!this._employees.hasEdge(id1, id2)) {
      
      this._employees.addEdge(id1, id2, {
        "status": 0
      });

    }

  } // create

  get(id1: string, id2: string): number {

    if (!this._employees.hasEdge(id1, id2)) {      
      this.create(id1, id2);
    }

    return this._employees.getEdgeAttribute(id1, id2, ATTR_STATUS);
    
  } // get

  increment(id1: string, id2: string, v: number) {

    let c = this._employees.getEdgeAttribute(id1, id2, ATTR_STATUS);
      
    if (c !== undefined) {

      let total = c + v;

      if (total > MAX_STATUS) {
        total = MAX_STATUS;
      } else if (total < MIN_STATUS) {
        total = MIN_STATUS;
      }

      this._employees.setEdgeAttribute(id1, id2, ATTR_STATUS, total);
    
    } else {
      this.create(id1, id2);
    }

  } // increment

} // Relations
