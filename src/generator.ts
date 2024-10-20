/* corpmenjs generator.ts */

export const ATTR_RANGE           = 100;
export const METER_RANGE          = 400;
export const BOND_RANGE           = 1000;

export const PCT_20            = 0.2;
export const PCT_10            = 0.1;
export const PCT_5             = 0.05;
export const PCT_1             = 0.01;



export function randomAttr(): number {
  return Math.floor(Math.random() * ATTR_RANGE);
} // randomAttr


export function meterUp(pct: number): number {

  if (pct < 0.0 || pct > 100.0) {
    throw Error("Percentage invalid");  
  } else {
    return Math.floor(METER_RANGE * pct);
  }
  
} // meterUp
