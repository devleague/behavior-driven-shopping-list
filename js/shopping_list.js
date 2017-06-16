class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem (shoppingListItem) {
    if(shoppingListItem){
      this.items.push(shoppingListItem);
    } else {
      throw Error("Item is not on shopping list");
    }
  }



}