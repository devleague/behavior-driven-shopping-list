"use strict";

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

  render() {
    return `<li class="completed_${this.isDone}"><span>${this.name}</span> <span>${this.description}</span></li>`;
  }

}

module.exports = { ShoppingListItem };
