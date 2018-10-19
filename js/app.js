(function(g) {
  const list = new ShoppingList();

  g.add_to_shopping_list = function() {
    let content = document.getElementById('content');
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let shoppingListItem = new ShoppingListItem(title.value, description.value);

    list.addItem(shoppingListItem);
    content.innerHTML = list.render();
   
  };

})(window);