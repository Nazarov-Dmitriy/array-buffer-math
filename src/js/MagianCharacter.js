import Character from './Character';

export default class MagianCharacter extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attackChatacter = 0;
    this.stonedBollean = false;
  }

  set attack(attack) {
    this.attackChatacter = attack;
  }

  get attack() {
    if (this.board > 1 && this.board <= 5) {
      if (this.stonedBollean) {
        return this.attackChatacter * (1 - 0.1 * (this.board - 1)) - Math.log2(this.board) * 5;
      }
      return this.attackChatacter * (1 - 0.1 * (this.board - 1));
    }
    return this.attackChatacter;
  }

  set stoned(bollean) {
    this.stonedBollean = bollean;
  }

  get stoned() {
    return this.attack;
  }
}
