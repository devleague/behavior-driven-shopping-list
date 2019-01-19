'use strict';

const content = document.querySelector('#content');
const addButton = document.querySelector('#addShoppingListItemButton');
const nameField = document.querySelector('#name');
const descriptionField = document.querySelector('#description');
const checkboxes = document.querySelectorAll('.checkbox');
const shoppingList = new ShoppingList();

/*******************
 FUNCTIONS
 ******************/

const addToShoppingList = () => {
  const newItem = new ShoppingListItem(nameField.value, descriptionField.value);
  shoppingList.addItem(newItem);
};

function changeCheckedStatus(idx, checkbox) {
  if (checkbox.checked) {
    shoppingList.items[idx].check();
  } else {
    shoppingList.items[idx].uncheck();
  }
  content.innerHTML = shoppingList.render();
}

/*******************
EVENT LISTENERS
******************/

addButton.addEventListener('click', event => {
  event.preventDefault();
  addToShoppingList();
  let renderedList = shoppingList.render();
  content.innerHTML = renderedList;
});
//doesn't matter
