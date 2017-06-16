class ShoppingListItem {
  constructor (name, description) {
    this.name = name;
    this.description = description;
    this.is_done = true;


  }

  check() {
    return this.is_done;
  }

  uncheck() {
    return this.is_done = false;
  }

  render() {
    return `$<li>`;
  }

}



