function ShoppingListItem (name, description) {
  this.name = name;
  this.description = description;
  this.is_done = false;

  this.check = function () {
    this.is_done = true;
    return this.is_done;
  };

  this.uncheck = function () {
    this.is_done = false;
    return this.is_done;
  };
}