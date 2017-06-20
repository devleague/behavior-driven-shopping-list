var myList = new ShoppingList();
var contentContainer = document.getElementById("content");
contentContainer.innerHTML = myList.render();


var addButton = document.createElement("button");
addButton.id = "add_shopping_list_item_button";
addButton.addEventListener("click", add_to_shopping_list);
addButton.innerHTML = "Add to Shopping List";
contentContainer.appendChild(addButton);


var itemNameBox;
var itemDescriptionBox;
var new_shopping_list_item;
var checkBox;

function add_to_shopping_list() {
  itemNameBox = document.getElementById("itemName");
  itemDescriptionBox = document.getElementById("itemDescription");
  var itemName = itemNameBox.value;
  var itemDescription = itemDescriptionBox.value;

  new_shopping_list_item = new ShoppingListItem(itemName, itemDescription);
  myList.addItem(new_shopping_list_item);

  itemNameBox.value = '';
  itemDescriptionBox.value = '';
  var li = document.createElement('li');
  li.innerHTML = new_shopping_list_item.render();
  contentContainer.appendChild(li);
}

function changeCheckedStatus(idx, checkBox){
  if(checkBox.checked === true){
    myList.items[idx].check();
  } else if(checkBox.checked === false){
    myList.items[idx].uncheck();
  }
}

function removeItemButtonClicked(idx){
  myList.removeItem(myList.items[idx]);
  contentContainer.innerHTML = myList.render();
}




