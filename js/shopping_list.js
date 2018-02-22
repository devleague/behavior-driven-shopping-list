class ShoppingList {

    constructor() {
        this.items = [];
    }

    addItem(item) {
        if (item instanceof ShoppingListItem) {
            this.items.push(item);
        } else {
            throw Error("not an item");
        }
    }

    removeItem(item) {
        if (item instanceof ShoppingListItem && this.items.indexOf(item) !== -1) {
            this.items.splice(this.items.indexOf(item), 1);
        } else if (arguments.length === 0) {
            this.items.pop();
        } else {
            throw Error("this item is not on your shopping list");
        }
    }

    render() {
        return `<ul>\
        <span>ShoppingListItem.render();</span>\
        </ul>`;
    }
}

let testShoppingList = new ShoppingList();
let newItem = new ShoppingListItem("pizza", "very yummy cheese thing");
let secondItem = new ShoppingListItem("cake", "also yummy");
let thirdItem = new ShoppingListItem("blueberries", "we should eat fruit too");
testShoppingList.addItem(secondItem);
testShoppingList.addItem(newItem);
console.log(testShoppingList);
testShoppingList.removeItem(secondItem);
console.log(testShoppingList);