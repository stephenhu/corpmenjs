/* corpmenjs characters.js */

import { TITLES, SALARY } from "./corpmen";
import { Employee } from "./employee";

export const MarshWhitmore = new Employee("Marsh", "Whitmore");

MarshWhitmore.setValues({
  title: "CEO",
  level: TITLES["CEO"],
  age: 54,
  salary: 450,
  shares: 2500,
  isManager: true,
  intelligence: 74,
  charisma: 83,
  oration: 67,
  resilience: 89,
  awareness: 87,
  analysis: 43,
  learning: 31,
  abstraction: 52,
  execution: 43,
  leadership: 56,
  management: 78,
  social: 95,
  persistence: 77,
  integrity: 15,
  stamina: 50,
  loyalty: 24,
  luck: 76,
  liked: 82,
  humility: 35,
  moral: 72,
  morale: 385,
  honor: 12,
  feared: 350,
  decisiveness: 399,
  corruptability: 387,
  deceptiveness: 380,
  manager: ""
});

export const JaneGoodall = new Employee("Jane", "Goodall");

JaneGoodall.setValues({
  title: "COO",
  level: TITLES["COO"],
  age: 43,
  salary: 360,
  shares: 1250,
  isManager: true,
  intelligence: 65,
  charisma: 93,
  oration: 74,
  resilience: 97,
  awareness: 94,
  analysis: 31,
  learning: 47,
  abstraction: 22,
  execution: 99,
  leadership: 84,
  management: 77,
  social: 100,
  persistence: 86,
  integrity: 17,
  stamina: 93,
  loyalty: 43,
  luck: 50,
  liked: 240,
  humility: 70,
  moral: 12,
  morale: 370,
  honor: 5,
  feared: 389,
  decisiveness: 374,
  corruptability: 302,
  deceptiveness: 310,
  manager: MarshWhitmore.id
});

export const StaceyHammonds = new Employee("Stacey", "Hammonds");

StaceyHammonds.setValues({
  title: "CFO",
  level: TITLES["CFO"],
  age: 41,
  salary: 325,
  shares: 600,
  isManager: true,
  intelligence: 80,
  charisma: 55,
  oration: 48,
  resilience: 21,
  awareness: 48,
  analysis: 94,
  learning: 70,
  abstraction: 33,
  execution: 70,
  leadership: 36,
  management: 32,
  social: 40,
  persistence: 80,
  integrity: 51,
  stamina: 60,
  loyalty: 62,
  luck: 41,
  liked: 39,
  humility: 64,
  moral: 80,
  morale: 240,
  honor: 75,
  feared: 40,
  decisiveness: 101,
  corruptability: 23,
  deceptiveness: 50,
  manager: MarshWhitmore.id
});

export const BillPatel = new Employee("Bill", "Patel");

BillPatel.setValues({
  title: "CIO",
  level: TITLES["CIO"],
  age: 60,
  salary: 289,
  shares: 100,
  isManager: true,
  intelligence: 51,
  charisma: 20,
  oration: 17,
  resilience: 25,
  awareness: 32,
  analysis: 50,
  learning: 48,
  abstraction: 60,
  execution: 50,
  leadership: 33,
  management: 40,
  social: 38,
  persistence: 44,
  integrity: 70,
  stamina: 28,
  loyalty: 30,
  luck: 58,
  liked: 22,
  humility: 40,
  moral: 53,
  morale: 121,
  honor: 42,
  feared: 14,
  decisiveness: 89,
  corruptability: 23,
  deceptiveness: 35,
  manager: MarshWhitmore.id
});

export const RandallChang = new Employee("Randle", "Chang");

RandallChang.setValues({
  title: "CTO",
  level: TITLES["CTO"],
  age: 48,
  salary: 375,
  shares: 980,
  isManager: true,
  intelligence: 85,
  charisma: 51,
  oration: 67,
  resilience: 89,
  awareness: 87,
  analysis: 43,
  learning: 31,
  abstraction: 52,
  execution: 43,
  leadership: 56,
  management: 78,
  social: 95,
  persistence: 77,
  integrity: 15,
  stamina: 50,
  loyalty: 24,
  luck: 76,
  liked: 82,
  humility: 35,
  moral: 72,
  morale: 385,
  honor: 12,
  feared: 350,
  decisiveness: 399,
  corruptability: 387,
  deceptiveness: 380,
  manager: MarshWhitmore.id
});

export const AbhijitKumar = new Employee("Abhijit", "Kumar");

AbhijitKumar.setValues({
  title: "Vice President",
  level: TITLES["Vice President"],
  age: 45,
  salary: 220,
  shares: 90,
  isManager: true,
  intelligence: 66,
  charisma: 48,
  oration: 50,
  resilience: 39,
  awareness: 52,
  analysis: 43,
  learning: 15,
  abstraction: 47,
  execution: 43,
  leadership: 60,
  management: 78,
  social: 74,
  persistence: 57,
  integrity: 40,
  stamina: 61,
  loyalty: 42,
  luck: 65,
  liked: 52,
  humility: 40,
  moral: 249,
  morale: 280,
  honor: 103,
  feared: 180,
  decisiveness: 278,
  corruptability: 100,
  deceptiveness: 65,
  manager: RandallChang.id
});

export const JaneSnell = new Employee("Jane", "Snell");

JaneSnell.setValues({
  title: "Supervisor",
  level: TITLES["Supervisor"],
  age: 30,
  salary: 110,
  shares: 8,
  isManager: true,
  intelligence: 31,
  charisma: 45,
  oration: 20,
  resilience: 11,
  awareness: 12,
  analysis: 14,
  learning: 10,
  abstraction: 10,
  execution: 10,
  leadership: 5,
  management: 6,
  social: 60,
  persistence: 10,
  integrity: 2,
  stamina: 90,
  loyalty: 3,
  luck: 5,
  liked: 22,
  humility: 1,
  moral: 4,
  morale: 204,
  honor: 0,
  feared: 59,
  decisiveness: 10,
  corruptability: 88,
  deceptiveness: 209,
  manager: AbhijitKumar.id
});

export const MindyVasquez = new Employee("Mindy", "Vasquez");

MindyVasquez.setValues({
  title: "Staff",
  level: TITLES["Staff"],
  age: 25,
  salary: 83,
  shares: 2,
  isManager: true,
  intelligence: 23,
  charisma: 50,
  oration: 17,
  resilience: 18,
  awareness: 18,
  analysis: 20,
  learning: 20,
  abstraction: 5,
  execution: 6,
  leadership: 5,
  management: 6,
  social: 34,
  persistence: 10,
  integrity: 2,
  stamina: 95,
  loyalty: 3,
  luck: 5,
  liked: 35,
  humility: 22,
  moral: 4,
  morale: 327,
  honor: 16,
  feared: 5,
  decisiveness: 5,
  corruptability: 88,
  deceptiveness: 182,
  manager: JaneSnell.id
});

export const KaiWatanabe = new Employee("Kai", "Watanabe");

KaiWatanabe.setValues({
  title: "Senior",
  level: TITLES["Senior"],
  age: 23,
  salary: 54,
  shares: 1,
  isManager: true,
  intelligence: 78,
  charisma: 60,
  oration: 36,
  resilience: 68,
  awareness: 64,
  analysis: 87,
  learning: 50,
  abstraction: 62,
  execution: 98,
  leadership: 20,
  management: 14,
  social: 20,
  persistence: 38,
  integrity: 89,
  stamina: 99,
  loyalty: 92,
  luck: 74,
  liked: 68,
  humility: 80,
  moral: 93,
  morale: 146,
  honor: 328,
  feared: 0,
  decisiveness: 112,
  corruptability: 0,
  deceptiveness: 0,
  manager: JaneSnell.id
});

export const RufusGeorge = new Employee("Rufus", "George");

RufusGeorge.setValues({
  title: "Senior",
  level: TITLES["Senior"],
  age: 22,
  salary: 51,
  shares: 2,
  isManager: true,
  intelligence: 38,
  charisma: 12,
  oration: 40,
  resilience: 11,
  awareness: 39,
  analysis: 47,
  learning: 60,
  abstraction: 37,
  execution: 24,
  leadership: 12,
  management: 18,
  social: 61,
  persistence: 26,
  integrity: 50,
  stamina: 88,
  loyalty: 46,
  luck: 72,
  liked: 59,
  humility: 60,
  moral: 57,
  morale: 303,
  honor: 43,
  feared: 0,
  decisiveness: 60,
  corruptability: 12,
  deceptiveness: 30,
  manager: JaneSnell.id
});

export const Cast = [MarshWhitmore, JaneGoodall, BillPatel, StaceyHammonds,
  RandallChang, AbhijitKumar, JaneSnell, MindyVasquez, KaiWatanabe, RufusGeorge];
  