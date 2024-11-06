/* corpmenjs scene.ts */

export class Scene {

  private _id: number = 0;
  private _texts: string[] = new Array();

  constructor(id: number) {
    this._id = id;
  } // constructor

  addText(t: string) {

    if (t !== null && t !== undefined && t.length !== 0 ) {
      this._texts.push(t);
    }

  } // addText

  set id(id: number) {
    this._id = id;
  } // id

  get id(): number {
    return this._id;
  } // id

  set texts(texts: string[]) {
    this._texts = texts;
  } // texts

  get texts(): string[] {
    return this._texts;
  } // texts

} // Scene
