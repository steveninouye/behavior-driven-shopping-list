class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (item instanceof ShoppingListItem) {
      this.items.push(item);
    } else {
      throw Error('Item is not a Shopping List Item');
    }
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    if (item instanceof ShoppingListItem && index !== -1) {
      this.items.splice(index, 1);
    } else if (item === undefined) {
      if (this.items.length > 0) {
        this.items.pop();
      }
    } else {
      throw Error('Item not found');
    }
  }

  render() {
    const concatArray = this.items.reduce((a, c, i) => {
      return a + c.render();
    }, '');
    return `<ul>${concatArray}</ul>`;
  }
}
