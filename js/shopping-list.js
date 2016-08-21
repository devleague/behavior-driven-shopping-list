function ShoppingList (title) {
  var header = document.createElement('h1');
  header.innerHTML = title;
  document.body.appendChild(header);
  this.setHeader = function (newHeader) {
    header.innerHTML = newHeader;
  };
}