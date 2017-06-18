var myList = new ShoppingList();
var contentContainer = document.getElementById("content");
contentContainer.innerHTML = myList.render();


var addButton = document.createElement("button");
addButton.id = "add_shopping_list_item_button";
addButton.addEventListener("click", add_to_shopping_list);
addButton.innerHTML = "Add to Shopping List";
contentContainer.appendChild(addButton);


var itemNameBox = document.getElementById("itemName");
var itemDescriptionBox = document.getElementById("itemDescription");

function add_to_shopping_list() {
  var itemName = itemNameBox.value;
  var itemDescription = itemDescriptionBox.value;

  var new_shopping_list_item = new ShoppingListItem(itemName, itemDescription);
  myList.addItem(new_shopping_list_item);
  contentContainer.innerHTML = myList.render();

  itemNameBox.value = '';
  itemDescriptionBox.value = '';
}

// function changeCheckedStatus(idx, checkbox){
//   if(checkbox.checked === true){
//     myList.items[idx].check();
//   } else if(checkbox.checked === false){
//     myList.items[idx].uncheck();
//   }
// }

// function removeItemButtonClicked(idx){
//   myList.removeItem(myList.items[idx]);
//   contentContainer.innerHTML = myList.render();
// }



