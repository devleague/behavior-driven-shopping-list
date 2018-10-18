class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }
  check() {
    this.is_done = true;
  }
  uncheck() {
    this.is_done = false;
  }
  render() {
    return `<li class= ${is_done}>
    <span>${name}</span> <span>${description}</span></li>`
  }
}