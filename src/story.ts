/* corpmenjs story.js */

import { Chapter } from "./chapter";
import { Organization, PIXEL_CORP } from "./organization";

export class Story {
 
  private _chapters: Chapter[];
  private _companies: Organization[];

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
    
    this._companies.forEach((c) => {

    });

    return;

  } // getCompany

  seed() {

    this.addCompany(PIXEL_CORP);

    const c1 = this.getCompany(PIXEL_CORP);

    c1.addEmployee("stephen", "hu");
    c1.addEmployee("marsh", "whitman");
  
  } // seed

} // Story
