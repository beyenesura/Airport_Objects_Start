class Bag {
  constructor(items = [], weight) {
    if (weight === undefined) {
      throw new Error("Bag needs weight");
    }
    this.items = items;
    this.weight = weight;
  }

  add(item, weight) {
    this.items.push(item);
    this.weight += weight;
  }

  remove(item, weight) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.weight -= weight;
    }
  }

  count(item) {
    let count = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        count++;
      }
    }
    return count;
  }
}

module.exports = Bag;

