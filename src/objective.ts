/* corpmenjs objective.js */

export const DEFAULT_DESCRIPTION = "This objective needs a description.";

export class Objective {
 
  private _completed: boolean;
  private _difficulty: number;
  private _points: number;
  private _description: string;

  constructor(difficulty: number) {
  
    this._completed = false;
    this._difficulty = difficulty;
    this._points = 0;
    this._description = DEFAULT_DESCRIPTION;

  } // constructor

  get completed(): boolean {
    return this._completed;
  } // completed

  set completed(completed: boolean) {
    this._completed = completed;
  } // completed

  get difficulty(): number {
    return this._difficulty;
  } // difficulty

  set difficulty(difficulty: number) {
    this._difficulty = difficulty;
  } // difficulty

  get points(): number {
    return this._points;
  } // points

  set points(points: number) {
    this._points = points;
  } // points

  get description(): string {
    return this._description;
  } // description

  set description(description: string) {
    this._description = description;
  } // description

} // Objective
