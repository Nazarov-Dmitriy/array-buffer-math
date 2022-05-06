import Character from './Character.js';

export default class MagianCharacter extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.stoned = false;
    this.board = 1;
  }

  set attack(board) {   
    this.board = board;
  }

  get attack() {

    return  (this.board > 1 && this.board <= 5) ? this.attack * (1 - 0.1 * (this.board - 1)) :
      this.attack;
    // if (this.stoned) {
    //   return attack - Math.log2(this.board) * 5;
    // } else {
    //   return attack;
    // }
  }

  // set stoned(board) {
  //   this.stoned = true;
  //   this.board = board;
  // }

  // get stoned() {
  //   return this.attack;
  // }
}
