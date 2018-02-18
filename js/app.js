(function() {
  let shoppingList = new ShoppingList();
  (window.renderShoppingList = () => {
    let renderedShoppingList = shoppingList.render();
    document.getElementById('content').innerHTML = renderedShoppingList;
  })();

  window.add_to_shopping_list = () => {
    console.log('testing');
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let new_shopping_list_item = new ShoppingListItem(title, description);
    shoppingList.addItem(new_shopping_list_item);
    renderShoppingList();
    return false;
  };
})();
