class ShoppingListItem {
  constructor (name, description, is_done) {
    this.name = name;
    this.description = description;
    this.is_done = false;


  }

  check () {
    return this.is_done = true;
  }

  uncheck () {
    return this.is_done = false;
  }

  render() {
    return `<li class="completed_${this.is_done}"><span>${this.name}</span> <span>${this.description}</span></li>`;

  }

}



