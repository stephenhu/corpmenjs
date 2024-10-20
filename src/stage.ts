/* corpmenjs stage.ts */

export const MAX_WIDTH        = 1920;
export const MAX_HEIGHT       = 1080;

export const MIN_WIDTH        = 768;
export const MIN_HEIGHT       = 432;


export class Stage {

  private _width:       number;
  private _height:      number;


  constructor(width: number, height: number) {

    this._width   = width;
    this._height  = height;
    
  } // constructor

} // Stage
