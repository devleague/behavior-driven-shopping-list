'use strict';

const listItem = require('./shopping-list-item.js');

let ShoppingListItem = listItem.ShoppingListItem;

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
}

module.exports = { ShoppingList };
