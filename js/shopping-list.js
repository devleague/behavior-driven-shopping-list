class ShoppingList extends ShoppingListItem {
  constructor() {
    super();
    this.items = [];
  }

  addItem(obj) {
    this.items.push(obj);
  }

  removeItem(obj) {
    if (this.items) {
      this.items.splice(ShoppingList.indexOf(obj), 1)
    } else if (obj = null) {
      return ShoppingList.pop();
    } else {
      return "Item not found"

    }
    console.log(this.items);
  }
  render() {
    return `<ul> ${this.items.map(function () {
     return this.items.render();
     })} </ul>`;
  }
};