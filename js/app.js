console.log("sanity check");

let marksFoodList = new ShoppingList();
let newFood = new ShoppingListItem("cheese", "yum");
marksFoodList.addItem(newFood);

let displayList = marksFoodList.render();

let contentDiv = document.getElementById("content");
contentDiv.innerHTML = displayList;