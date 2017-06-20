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
    //return `<li class="completed_${this.is_done}"><span>${this.name}</span> <span>${this.description}</span></li>`;
    // var listItem = document.createElement('li');
    // listItem.className = `completed_${this.is_done}`;

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
    <span>${this.name}</span>\n
    <span>${this.description}</span>`;

  }

}



