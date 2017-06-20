class ShoppingListItem {
  constructor (name, description, id) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.is_done = false;
  }

  check () {
    return this.is_done = true;
  }

  uncheck () {
    return this.is_done = false;
  }

  render() {
    // var checkBox = document.createElement('input');
    // checkBox.className = "checkBox";
    // checkBox.type = "checkbox";
    // listItem.appendChild(checkBox);

    // var nameSpan = document.createElement('span');
    // nameSpan.innerHTML = `${this.name}`;
    // listItem.appendChild(nameSpan);

    // var descriptionSpan = document.createElement('span');
    // descriptionSpan.innerHTML = `${this.description}`;
    // listItem.appendChild(descriptionSpan);

    return `<input class="checkBox" type="checkbox" id="${this.id}" ${this.is_done ? "checked" : ""}>\n
    <span>${this.name}</span>
    <span>${this.description}</span>`;

  }

}



