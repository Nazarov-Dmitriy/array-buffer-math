import MagianCharacter from './MagianCharacter';

export default class Magician extends MagianCharacter {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 100;
    this.defence = 40;
  }
}
