/* corpmenjs meters.ts */


export class Meters {

  private _liked: number = 0;
  private _humility: number = 0;
  private _moral: number = 0;
  private _morale: number = 0;
  private _honor: number = 0;
  private _feared: number = 0;
  private _decisiveness: number = 0;
  private _corruptability: number = 0;
  private _deceptiveness: number = 0;
  private _mental: number = 100;
  private _physical: number = 100;
  private _emotional: number = 100;

  constructor() {

  } // constructor

  set liked(liked: number) {
    this._liked = liked;
  } // liked

  get liked(): number {
    return this._liked;
  } // liked

  set humility(humility: number) {
    this._humility = humility;
  } // charisma

  get humility(): number {
    return this._humility;
  } // humility

  set moral(moral: number) {
    this._moral = moral;
  } // moral

  get moral(): number {
    return this._moral;
  } // moral

  set morale(morale: number) {
    this._morale = morale;
  } // moral

  get morale(): number {
    return this._morale;
  } // morale

  set honor(honor: number) {
    this._honor = honor;
  } // resilience

  get honor(): number {
    return this._honor;
  } // honor

  set feared(feared: number) {
    this._feared = feared;
  } // feared

  get feared(): number {
    return this._feared;
  } // feared

  set decisiveness(decisiveness: number) {
    this._decisiveness = decisiveness;
  } // decisiveness

  get decisiveness(): number {
    return this._decisiveness;
  } // decisiveness

  set corruptability(corruptability: number) {
    this._corruptability = corruptability;
  } // corruption

  get corruptability(): number {
    return this._corruptability;
  } // corruptability

  set deceptiveness(deceptiveness: number) {
    this._deceptiveness = deceptiveness;
  } // deceptiveness

  get deceptiveness(): number {
    return this._deceptiveness;
  } // deceptiveness

} // Attributes
