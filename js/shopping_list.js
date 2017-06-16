class ShoppingList {
  constructor() {
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



}