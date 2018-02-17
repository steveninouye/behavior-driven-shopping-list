class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (item instanceof ShoppingListItem) {
      this.items.push(item);
    } else {
      throw Error;
    }
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    if (item instanceof ShoppingListItem && index !== -1) {
      array.splice(index, 1);
    } else if (item === undefined) {
      if (this.items.length > 0) {
        this.items.pop();
      }
    } else {
      throw Error;
    }
  }

  render() {
    const concatArray = this.items.reduce((a, c, i) => {
      return a + c.render();
    }, '');
    return `<ul>${concatArray}</ul>`;
  }
}
