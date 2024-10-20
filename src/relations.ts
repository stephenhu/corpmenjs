/* corpmenjs directory.ts */

import Graph from "graphology";

export const ATTR_BOND          = "bond";

export class Relations {

  private _affinity: Graph;

  constructor() {
    
    this._affinity = new Graph({type: "undirected"});

  } // constructor

  set affinity(affinity: Graph) {
    this._affinity = affinity;
  } // affinity

  get affinity(): Graph {
    return this._affinity;
  } // affinity

  add(id: string) {

    if (!this._affinity.hasNode(id)) {

      this._affinity.addNode(id);

      this.addRelations(id);
    
    }

  } // add

  remove(id: string) {
    this._affinity.dropNode(id);
  } // remove

  addRelations(id: string) {

    let employees = this._affinity.nodes();

    employees.forEach(e => {

      if (e !== id) {

        if (!this._affinity.hasEdge(id, e)) {
          
          this._affinity.addEdge(id, e, {
            ATTR_BOND: 0
          });

        }

      } 

    });

  } // addRelations

  up(id1: string, id2: string, v: number) {

    if (v > 0 && v <= 100) {
      
      let c = this._affinity.getEdgeAttribute(id1, id2, ATTR_BOND);
      
      if (c !== undefined) {
        this._affinity.setEdgeAttribute(id1, id2, ATTR_BOND, c + v);
      } else {
        this._affinity.setEdgeAttribute(id1, id2, ATTR_BOND, 0);
      }

    } else {
      throw Error("Cannot increment by " + v);
    }

  } // up

  down(id1: string, id2: string, v: number) {

    if (v > 0 && v <= 100) {
      
      let c = this._affinity.getEdgeAttribute(id1, id2, ATTR_BOND);
      
      if (c !== undefined) {

        let t = c - v;

        if (t > 0) {
          this._affinity.setEdgeAttribute(id1, id2, ATTR_BOND, t);
        } else {
          this._affinity.setEdgeAttribute(id1, id2, ATTR_BOND, 0);  
        }

      } else {
        this._affinity.setEdgeAttribute(id1,id2, ATTR_BOND, 0);
      }

    } else {
      throw Error("Cannot increment by " + v);
    }

  } // down

} // Relations
