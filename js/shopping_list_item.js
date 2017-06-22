var count = 0;

class ShoppingListItem {
  constructor (name, description, idx) {
    this.name = name;
    this.description = description;
    this.is_done = false;
    this.idx = count++;
  }

  check () {
    return this.is_done = true;
  }

  uncheck () {
    return this.is_done = false;
  }

  render(idx) {

    return `<input class="checkBox" type="checkbox" id="${this.idx}" ${this.is_done ? "checked" : ""}>\n
    <span>${this.name}</span>
    <span>${this.description}</span>`;

  }

}



