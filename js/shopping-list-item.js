class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isDone = false;
  }

  check() {
    return (this.isDone = true);
  }

  uncheck() {
    return (this.isDone = false);
  }
}

module.exports = { ShoppingListItem };
