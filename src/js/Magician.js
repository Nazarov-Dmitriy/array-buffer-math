import MagianCharacter from './MagianCharacter.js';

export default class Magician extends MagianCharacter {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 100;
    this.defence = 40;
  }
}

let a = new Magician();
a.attack = 2;
console.log(a);
console.log(a.attack);
