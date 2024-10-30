/* corpmenjs organization.ts */

import Graph from "graphology";

export const GRAPH_TYPE             = "undirected";

export const ATTR_STATUS            = "status";
export const ATTR_MANAGER           = "manager";
export const ATTR_COMPANY_NAME      = "company";

export const BIG_CORP               = "Big, Inc";
export const PIXEL_CORP             = "Pixel Corporation";

export const MAX_STATUS             = 600;
export const MIN_STATUS             = 0;

export class Organization {

  private _employees: Graph;

  constructor(name: string) {
    
    this._employees = new Graph({type: GRAPH_TYPE});

    this._employees.setAttribute(ATTR_COMPANY_NAME,
      name);

  } // constructor

  set employees(employees: Graph) {
    this._employees = employees;
  } // employees

  get employees(): Graph {
    return this._employees;
  } // employees

  getId(first: string, last: string): string {

    // TODO: add filter for bad characters, should only include a-zA-Z

    if (first === null || first === undefined || first.length === 0) {
      throw new Error("Invalid employee name");
    }

    return `${first.toLowerCase()}.${last.toLowerCase()}`;

  } // getId

  addEmployee(first: string, last: string) {

    try {

      let id = this.getId(first, last);

      if (!this._employees.hasNode(id)) {
        this._employees.addNode(id);
      }
  
    } catch(e) {
      console.log(e);
    }

  } // addEmployee

  removeEmployee(first: string, last: string) {

    try {

      let id = this.getId(first, last);

      this._employees.dropNode(id);

    } catch(e) {
      console.log(e);
    }

  } // removeEmployee

  createRelation(id1: string, id2: string) {

    if (!this._employees.hasEdge(id1, id2)) {
      
      this._employees.addEdge(id1, id2, {
        "status": 0,
        "isManager": false
      });

    }

  } // createRelation

  getStatus(id1: string, id2: string): number {

    if (!this._employees.hasEdge(id1, id2)) {      
      this.createRelation(id1, id2);
    }

    return this._employees.getEdgeAttribute(id1, id2, ATTR_STATUS);
    
  } // getStatus

  incrementStatus(id1: string, id2: string, v: number) {

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
      this.createRelation(id1, id2);
    }

  } // incrementStatus

  addDirectReport(manager: string, direct: string) {

    this.createRelation(manager, direct);

    this._employees.setEdgeAttribute(manager, direct,
      ATTR_MANAGER, manager);

  } // addDirectReport

  removeDirectReport(manager: string, direct: string) {

    if (this._employees.hasEdge(manager, direct)) {

      this._employees.setEdgeAttribute(manager, direct,
        ATTR_MANAGER, "");
  
    }

  } // removeDirectReport

  getDirectReports(id: string): string[] {

    const directs = new Array();

    this._employees.edges(id).forEach((e) => {

      const m = this._employees.getEdgeAttribute(e,
        ATTR_MANAGER);

      if (m === id) {
        directs.push(this._employees.target(e));
      }

    });
    
    return directs;

  } // getDirectReports

  getOrgReports(id: string): string[] {

    const directs = new Array();

    this._employees.edges(id).forEach((e) => {

      const m = this._employees.getEdgeAttribute(e,
        ATTR_MANAGER);

      if (m === id) {
        directs.push(this._employees.target(e));
      }

    });
    
    return directs;

  } // getOrgReports

} // Organization
