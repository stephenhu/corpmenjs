/* corpmenjs organization.ts */

import { Employee } from "./employee";

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
  private _name: string;

  constructor(name: string) {
    
    this._name = name;

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

  set name(name: string) {
    this._name = name;
  } // name

  get name(): string {
    return this._name;
  } // name

  getId(first: string, last: string): string {

    // TODO: add filter for bad characters, should only include a-zA-Z

    if (first === null || first === undefined || first.length === 0) {
      throw new Error("Invalid employee name");
    }

    return `${first.toLowerCase()}.${last.toLowerCase()}`;

  } // getId

  addEmployee(e: Employee) {

    try {

      if (!this._employees.hasNode(e.id)) {
        this._employees.addNode(e.id, {
          first: e.first,
          last: e.last,
          age: e.age,
          title: e.title,
          level: e.level,
          salary: e.salary,
          shares: e.shares,
          isManager: e.isManager,
          manager: e.manager,
          intelligence: e.attrs.intelligence,
          charisma: e.attrs.charisma,
          oration: e.attrs.oration,
          resilience: e.attrs.resilience,
          awareness: e.attrs.awareness,
          analysis: e.attrs.analysis,
          learning: e.attrs.learning,
          abstraction: e.attrs.abstraction,
          execution: e.attrs.execution,
          leadership: e.attrs.leadership,
          management: e.attrs.management,
          social: e.attrs.social,
          persistence: e.attrs.persistence,
          integrity: e.attrs.integrity,
          stamina: e.attrs.stamina,
          loyalty: e.attrs.loyalty,
          luck: e.attrs.luck,
          liked: e.meters.liked,
          humility: e.meters.humility,
          moral: e.meters.moral,
          morale: e.meters.morale,
          honor: e.meters.honor,
          feared: e.meters.feared,
          decisiveness: e.meters.decisiveness,
          corruptability: e.meters.corruptability,
          deceptiveness: e.meters.deceptiveness
        });
      }
  
    } catch(e) {
      console.log(e);
    }

  } // addEmployee

  removeEmployee(e: Employee) {

    try {
      this._employees.dropNode(e.id);

    } catch(e) {
      console.log(e);
    }

  } // removeEmployee

  onboard(e: any) {

    let id = this.getId(e.first, e.last);

    try {

      if (!this._employees.hasNode(id)) {
        this._employees.addNode(id, e);
      }
  
    } catch(err) {
      console.log(err);
    }

  } // onboard

  initPlayerAttributes(e: Employee) {

    let id = this.getId(e.first, e.last);

    if (!this._employees.hasNode(id)) {

      this._employees.updateNode(id, attr => {

        return {

          intelligence: e.attrs.intelligence,
          charisma: e.attrs.charisma,
          oration: e.attrs.oration,
          resilience: e.attrs.resilience,
          awareness: e.attrs.awareness,
          analysis: e.attrs.analysis,
          learning: e.attrs.learning,
          abstraction: e.attrs.abstraction,
          execution: e.attrs.execution,
          leadership: e.attrs.leadership,
          management: e.attrs.management,
          social: e.attrs.social,
          persistence: e.attrs.persistence,
          integrity: e.attrs.integrity,
          stamina: e.attrs.stamina,
          loyalty: e.attrs.loyalty,
          luck: e.attrs.luck

        }

      });
    }

  } // initPlayerAttributes

  createRelation(id1: string, id2: string) {

    let a = id1.toLowerCase();
    let b = id2.toLowerCase();

    if (!this._employees.hasEdge(a, b)) {
      
      this._employees.addEdge(a, b, {
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
