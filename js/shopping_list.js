class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem (item) {
    if(item) {
      this.items.push(item);
    } else {
      throw Error("Item is not on shopping list");
    }
  }

  removeItem (item) {

  }



}