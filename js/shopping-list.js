'use strict';

class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!(item instanceof ShoppingListItem)) {
      throw new Error('invalid item');
    }
    this.items.push(item);
  }

  removeItem(item) {
    if (item === undefined) {
      this.items.pop();
    } else if (
      !(item instanceof ShoppingListItem && this.items.includes(item))
    ) {
      throw new Error('that item is not on your list');
    } else {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
  render() {
    let unorderedList = '<ul>';
    for (let i = 0; i < this.items.length; i++) {
      let rendered = this.items[i].render(i);
      unorderedList += rendered;
    }
    return unorderedList + '</ul>';
  }
}

// module.exports = { ShoppingList };
