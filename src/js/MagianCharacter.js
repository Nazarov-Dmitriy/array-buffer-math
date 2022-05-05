import Character from './Character';

export default class MagianCharacter extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.stoned = 0;
    this.board = 1;
  }

  set attackDistance(board) {
    this.board = board;
  }

  get attackDistance() {
    return (this.board > 1 && this.board <= 5) ? this.attack * (1 - 0.1 * (this.board - 1)) :
      this.attack;
  }

  set stoned(board) {
    this.board = board;
  }

  get stoned() {
    return this.attackDistance - Math.log2(this.board) * 5;
  }
}
