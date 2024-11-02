/* corpmenjs employee.ts */

import { TITLES, SALARY } from "./corpmen";
import { Attributes } from "./attributes";
import { Meters } from "./meters";
import { randomAttr, randomRange } from "./generator";

export class Employee {

  private _id: string;
  private _first:  string;
  private _last:  string;
  private _title: string;
  private _level: number;
  private _age: number; 
  private _salary: number;
  private _shares: number;
  private _isManager: boolean;
  private _manager: string;
  private _attrs:  Attributes = new Attributes();
  private _meters:  Meters = new Meters();

  constructor(first: string, last: string) {

    this._first = first.toLowerCase();
    this._last = last.toLowerCase();
    this._id = `${first.toLowerCase()}.${last.toLowerCase()}`
    this._isManager = false;
    this._manager = "";
    this._title = "";
    this._level = 1;
    this._age = 1;
    this._salary = 0;
    this._shares = 0;

  } // constructor

  setValues(d: any) {

    this.title = d.title;
    this.level = d.level;
    this.age = d.age;
    this.salary = d.salary;
    this.shares = d.shares;
    this.isManager = d.isManager;
    this._attrs.intelligence = d.intelligence;
    this._attrs.charisma = d.charisma;
    this._attrs.oration = d.oration;
    this._attrs.resilience = d.resilience;
    this._attrs.awareness = d.awareness;
    this._attrs.analysis = d.analysis;
    this._attrs.learning = d.learning;
    this._attrs.abstraction = d.abstraction;
    this._attrs.execution = d.execution;
    this._attrs.leadership = d.leadership;
    this._attrs.management = d.management;
    this._attrs.social = d.social;
    this._attrs.persistence = d.persistence;
    this._attrs.integrity = d.integrity;
    this._attrs.stamina = d.stamina;
    this._attrs.loyalty = d.loyalty;
    this._attrs.luck = d.luck;
    this._meters.liked = d.liked;
    this._meters.humility = d.humility;
    this._meters.moral = d.moral;
    this._meters.morale = d.morale;
    this._meters.honor = d.honor;
    this._meters.feared = d.feared;
    this._meters.decisiveness = d.decisiveness;
    this._meters.corruptability = d.corruptability;
    this._meters.deceptiveness = d.deceptiveness;

  } // setValues

  setAttributes(attr: Attributes) {

    this._attrs.intelligence = attr.intelligence;
    this._attrs.charisma = attr.charisma;
    this._attrs.oration = attr.oration;
    this._attrs.resilience = attr.resilience;
    this._attrs.awareness = attr.awareness;
    this._attrs.analysis = attr.analysis;
    this._attrs.learning = attr.learning;
    this._attrs.abstraction = attr.abstraction;
    this._attrs.execution = attr.execution;
    this._attrs.leadership = attr.leadership;
    this._attrs.management = attr.management;
    this._attrs.social = attr.social;
    this._attrs.persistence = attr.persistence;
    this._attrs.integrity = attr.integrity;
    this._attrs.stamina = attr.stamina;
    this._attrs.loyalty = attr.loyalty;
    this._attrs.luck = attr.luck;

  } // setAttributes

  seed() {

    this._age = 22;
    this._level = TITLES["Junior"];
    this._title = "Junior";
    this._salary = randomRange(SALARY[1].min, SALARY[1].max);
    this._shares = 100;
    this._isManager = false;

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

  flatValues(): any {

    return {
      first: this._first,
      last: this._last,
      isManager: this._isManager,
      title: this._title,
      level: this._level,
      age: this._age,
      salary: this._salary,
      shares: this._shares,
      intelligence: this._attrs.intelligence,
      charisma: this._attrs.charisma,
      oration: this._attrs.oration,
      resilience: this._attrs.resilience,
      awareness: this._attrs.awareness,
      analysis: this._attrs.analysis,
      learning: this._attrs.learning,
      abstraction: this._attrs.abstraction,
      execution: this._attrs.execution,
      leadership: this._attrs.leadership,
      management: this._attrs.management,
      social: this._attrs.social,
      persistence: this._attrs.persistence,
      integrity: this._attrs.integrity,
      stamina: this._attrs.stamina,
      loyalty: this._attrs.loyalty,
      luck: this._attrs.luck,
      liked: this._meters.liked,
      humility: this._meters.humility,
      moral: this._meters.moral,
      morale: this._meters.morale,
      honor: this._meters.honor,
      feared: this._meters.feared,
      decisiveness: this._meters.decisiveness,
      corruptability: this._meters.corruptability,
      deceptiveness: this._meters.deceptiveness
    }

  } // flatValues

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

  set title(title: string) {
    this._title = title;
  } // title

  get title(): string {
    return this._title;
  } // title

  set level(level: number) {
    this._level = level;
  } // level

  get level(): number {
    return this._level;
  } // level

  set age(age: number) {
    this._age = age;
  } // age

  get age(): number {
    return this._age;
  } // age

  set salary(salary: number) {
    this._salary = salary;
  } // salary

  get salary(): number {
    return this._salary;
  } // salary

  set shares(shares: number) {
    this._shares = shares;
  } // shares

  get shares(): number {
    return this._shares;
  } // shares

  set isManager(isManager: boolean) {
    this._isManager = isManager;
  } // isManager

  get isManager(): boolean {
    return this._isManager;
  } // isManager

  set manager(manager: string) {
    this._manager = manager;
  } // manager

  get manager(): string {
    return this._manager;
  } // manager

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
