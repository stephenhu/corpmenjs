/* corpmenjs player.ts */

import { Attributes } from "./attributes";
import { Meters } from "./meters";
import { randomAttr } from "./generator";


export class Player {

  private _name:  string;
  private _attrs:  Attributes = new Attributes();
  private _meters:  Meters = new Meters();


  constructor(name: string) {

    this._name = name;

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

  set name(name: string) {
    this._name = name;
  } // name

  get name(): string {
    return this._name;
  } // name

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


} // Player
