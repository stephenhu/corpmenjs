/* corpmenjs player.ts */

import { Attributes } from "./attributes";
import { Meters } from "./meters";
import { randomAttr } from "./generator";


export class Employee {

  private _id: string;
  private _first:  string;
  private _last:  string;
  private _isManager: boolean;
  private _attrs:  Attributes = new Attributes();
  private _meters:  Meters = new Meters();

  constructor(first: string, last: string) {

    this._first = first;
    this._last = last;
    this._id = `${first}.${last}`
    this._isManager = false;

  } // constructor

  seed() {

    this._attrs.intelligence = randomAttr();
    this._attrs.charisma = randomAttr();
    this._attrs.oration = randomAttr();
    this._attrs.resilience = randomAttr();
    this._attrs.awareness = randomAttr();
    this._attrs.analysis = randomAttr();
    this._attrs.learning = randomAttr();
    this._attrs.abstraction = randomAttr();
    this._attrs.execution = randomAttr();
    this._attrs.leadership = randomAttr();
    this._attrs.management = randomAttr();
    this._attrs.social = randomAttr();
    this._attrs.persistence = randomAttr();
    this._attrs.integrity = randomAttr();
    this._attrs.stamina = randomAttr();
    this._attrs.loyalty = randomAttr();
    this._attrs.luck = randomAttr();

  } // seed

  load(buf: string) {

    console.log(buf);

    if (buf === null || buf.length === 0 || buf === undefined) {
      this.seed();
    } else {

      let o = JSON.parse(buf);

      console.log(o.attrs.intelligence);

    }

  } // load

  set first(first: string) {
    this._first = first;
  } // first

  get first(): string {
    return this._first;
  } // first

  set last(last: string) {
    this._last = last;
  } // last

  get last(): string {
    return this._last;
  } // last

  set isManager(isManager: boolean) {
    this._isManager = isManager;
  } // isManager

  get isManager(): boolean {
    return this._isManager;
  } // isManager

  set attrs(attrs: Attributes) {
    this._attrs = attrs;
  } // attrs

  get attrs(): Attributes {
    return this._attrs;
  } // attrs

  set meters(meters: Meters) {
    this._meters = meters;
  } // name

  get meters(): Meters {
    return this._meters;
  } // meters

  get id(): string {
    return this._id;
  } // id

} // Employee
