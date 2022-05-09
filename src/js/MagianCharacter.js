import Character from './Character';

export default class MagianCharacter extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attackChatacter = 0;
    this.stonedBollean = false;
  }

  set stoned(bollean) {
    this.stonedBollean = bollean;
  }

  set attack(attack) {
    this.attackChatacter = attack;
  }

  get attack() {
    this.attackChatacter = (this.board > 1 && this.board <= 5) ?
      this.attackChatacter * (1 - 0.1 * (this.board - 1)) :
      this.attackChatacter;
    return this.attackChatacter;
  }

  get stoned() {
    if (this.stonedBollean) {
      this.attackChatacter -= Math.log2(this.board) * 5;
    }
    return this.attackChatacter;
  }
}
