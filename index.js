class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) { return a-b;})
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.findIndex(item => item === pos) !== -1) {
      const index = this.items.findIndex(item => item === pos)
      return index;
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } 
      return Math.max(...this.items)
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } 
      return Math.min(...this.items)
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } 
    const sumAr = this.items.reduce(function (acc, val) {
      return acc + val;
    })
    return sumAr;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } 
    const sumAr = this.items.reduce(function (acc, val) {
      return acc + val;
    })
    return sumAr/this.items.length;
  }
}

const listSorted = new SortedList;

module.exports = SortedList;
