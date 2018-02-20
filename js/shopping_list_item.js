class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
    let date = new Date();
    this.id = date.getTime();
  }

  toggleIsDone() {
    if (this.id_done === true) {
      this.is_done = false;
    } else {
      this.is_done = true;
    }
  }

  render() {
    return `<li class="completed_${
      this.is_done
    }"><input type='checkbox' onchange = changeCheckedStatus(${
      this.id
    })><span>${this.name}</span> <span>${
      this.description
    }.</span><button onclick = removeItemButtonClicked(${
      this.id
    }) >X</button></li>`;
  }
}
