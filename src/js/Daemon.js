import MagianCharacter from './MagianCharacter  ';

export default class Daemon extends MagianCharacter {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}
