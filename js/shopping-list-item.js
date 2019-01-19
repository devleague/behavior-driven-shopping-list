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

  render(idx) {
    if (this.isDone === true) {
      return `<li class="completed_${this.isDone}"><input type="checkbox" onchange="changeCheckedStatus(${idx}, this)" checked/><span>${this.name}</span> <span>${this.description}</span></li>`;
    } else {
      return `<li class="completed_${this.isDone}"><input type="checkbox" onchange="changeCheckedStatus(${idx}, this)"><span>${this.name}</span> <span>${this.description}</span></li>`;
    }
  }

}

// module.exports = { ShoppingListItem };
