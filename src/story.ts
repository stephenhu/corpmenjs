/* corpmenjs story.js */

import { Chapter } from "./chapter";
import { Employee } from "./employee";
import { BIG_INC, Organization, PIXEL_CORP } from "./organization";
import { Cast } from "./characters";

export class Story {
 
  private _chapters: Chapter[];
  private _companies: Organization[];
  private _points: number = 0;
  private _progression: number = 0;

  constructor() {
  
    this._chapters = new Array();
    this._companies = new Array();
  
  } // constructor

  get chapters(): Chapter[] {
    return this._chapters;
  } // chapters

  set chapters(chapters: Chapter[]) {
    this._chapters = chapters;
  } // chapters

  get companies(): Organization[] {
    return this._companies;
  } // companies

  set companies(companies: Organization[]) {
    this._companies = companies;
  } // companies

  addCompany(name: string) {
    this._companies.push(new Organization(name));
  } // addCompany

  getCompany(name: string): Organization {
    
    for( let i = 0; i < this._companies.length; i++) {
      
      if (this._companies[i].name === name) {
        return this._companies[i];
      }

    }

    throw new Error("Company not found.")

  } // getCompany

  addPlayer(first: string, last: string) {

    let e = new Employee(first, last);

    e.seed();

    let c = this.getCompany(PIXEL_CORP);

    c.addEmployee(e);

  } // addPlayer

  loadCompanies() {
    
    this.addCompany(PIXEL_CORP);

    this.addCompany(BIG_INC);

  } // loadCompanies

  loadCharacters() {

    let c = this.getCompany(PIXEL_CORP);

    Cast.forEach((p) => {
      c.addEmployee(p);
    });
    
    console.log(c);

  } // loadCharacters

} // Story
