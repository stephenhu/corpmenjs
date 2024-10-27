/* corpmenjs chapter.js */

import { Employee } from "./employee";
import { Objective } from "./objective";

export class Chapter {
 
  private _id: number;
  private _objectives: Objective[];

  constructor(id: number) {

    this._id = id;
    this._objectives = new Array();

  } // constructor

  get id(): number {
    return this._id;
  } // id

  set id(id: number) {
    this._id = id;
  } // id

  get objectives(): Objective[] {
    return this._objectives;
  } // objectives

  set objectives(objectives: Objective[]) {
    this._objectives = objectives;
  } // objectives

} // Chapter
