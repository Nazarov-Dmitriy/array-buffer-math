export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

  }

  levelUp() {
    this.health = 100;
    this.level++;
    this.attack = this.attack + this.attack * 0.2;
    this.defence = this.defence + this.defence * 0.2;;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }

  boardАttack(board) {
    switch (board) {
      case 1:
        return this.attack;
      case 2:
        return this.attack * 0.9;
      case 3:
        return this.attack * 0.8;
      case 4:
        return this.attack * 0.7;
      case 5:
        return this.attack * 0.6;
    }
  }

  stoned(board) {
    return (this.boardАttack(board) - Math.log2(board) * 5);
  }
}
