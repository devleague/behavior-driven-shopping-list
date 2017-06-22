class ShoppingList {
  constructor(items) {
    this.items = [];
  }

  addItem (item) {
    if(item instanceof ShoppingListItem) {
      this.items.push(item);
    } else {
      throw Error("This item is not on shopping list");
    }
  }

  removeItem (item) {
    if(item instanceof ShoppingListItem) {
      if(this.items.indexOf(item) > -1) {
        this.items.splice(this.items.indexOf(item), 1);
      } else {
        throw Error("Cannot remove item");
      }
    } else if (item === undefined) {
      this.items.pop();
    }
  }

  render() {
    var newList = '';
    for(var i = 0; i < this.items.length; i ++){
      newList += this.items[i];
    }
    return `<ul>${newList}</ul>`;
  }

}