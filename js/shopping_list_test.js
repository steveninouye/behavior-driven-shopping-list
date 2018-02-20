const should = chai.should();
const expect = chai.expect;
let shoppingListItem;

describe('ShoppingListItem Test', () => {
  beforeEach(() => {
    shoppingListItem = new ShoppingListItem('Mangos', 'Delicious!');
  });

  describe('ShoppingListItem', () => {
    //ShoppingListItem is a class
    it('ShoppingListItem should be a class', () => {
      expect(new ShoppingListItem()).to.be.an.instanceof(ShoppingListItem);
    });

    //ShoppingListItem has a property named name
    it('ShoppingListItem has a property named name', () => {
      expect(shoppingListItem).to.have.property('name');
    });

    //ShoppingListItem has a property named description
    it('ShoppingListItem has a property named description', () => {
      expect(shoppingListItem).to.have.property('description');
    });

    //ShoppingListItem has a property named is_done
    it('ShoppingListItem has a property named is_done', () => {
      expect(shoppingListItem).to.have.property('is_done');
    });

    //ShoppingListItem has a constructor method that accepts 2 arguments, *name* and *description*
    it('ShoppingListItem has a constructor method that accepts 2 arguments, "name" and "description"', () => {
      expect(shoppingListItem).to.have.property('description', 'Delicious!');
      expect(shoppingListItem).to.have.property('name', 'Mangos');
    });

    //*name* and *description* sets the new instances *name* and *description* properties using the arguments passed in
    it('ShoppingListItem "name" and "description" sets the new instances "name" and "description" properties using the arguments passed in', () => {
      let testShoppingListItem = new ShoppingListItem(
        'Strawberry',
        'Red Fruit'
      );
      expect(testShoppingListItem).to.have.property('name', 'Strawberry');
      expect(testShoppingListItem).to.have.property('description', 'Red Fruit');
    });

    // //ShoppingListItem has a method named *check*
    // it('ShoppingListItem has a method named "check"', () => {
    //   expect(shoppingListItem).to.respondTo('check');
    // });

    // //calling the instance *check* method will set it's *is_done* property to true
    // it('calling the instance "check" method will set its "is_done" property to true', () => {
    //   shoppingListItem.check();
    //   expect(shoppingListItem).to.have.property('is_done', true);
    // });

    // //ShoppingListItem has a method named *uncheck*
    // it('ShoppingListItem has a method named "uncheck"', () => {
    //   expect(shoppingListItem).to.respondTo('uncheck');
    // });

    // //calling the instance's *uncheck* mehod will set its *is_done* property to false
    // it('calling the instance "uncheck" method will set its "is_done" property to false', () => {
    //   shoppingListItem.uncheck();
    //   expect(shoppingListItem).to.have.property('is_done', false);
    // });

    //ShoppingListItem has a method named *render*
    it('ShoppingListItem has a method named "render"', () => {
      expect(shoppingListItem).to.respondTo('render');
    });

    //calling the instance's *render* method will construct and return an html formatted string.  The String content will be wrapped in <li> tags
    it("calling the instance's *render* method will construct and return an html formatted string.  The String content will be wrapped in <li> tags", () => {
      expect(shoppingListItem.render()).to.equal(
        `<li class="completed_${shoppingListItem.is_done}"><span>${
          shoppingListItem.name
        }</span> <span>${shoppingListItem.description}.</span></li>`
      );
    });
  });
});

describe('ShoppingListItem Test', () => {
  let shoppingList;
  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  describe('ShoppingListItem', () => {
    // ShoppingList is a class
    it('ShoppingList should be a class', () => {
      expect(new ShoppingList()).to.be.an.instanceof(ShoppingList);
    });

    // ShoppingList has a property named items
    it('ShoppingList has a property named items', () => {
      expect(shoppingList).to.have.property('items');
    });

    // ShoppingList has a constructor method that initializes items as an empty Array
    it('ShoppingList has a constructor method that initializes items as an empty Array', () => {
      expect(shoppingList.items).to.have.members([]);
    });

    // ShoppingList has a method named addItem that accepts a single ShoppingListItem argument
    it('ShoppingList has a method named addItem that accepts a single ShoppingListItem argument', () => {
      expect(shoppingList).to.respondTo('addItem');
    });

    // invoking the addItem method by passing in a ShoppingListItem object should add that object to the items array
    it('invoking the addItem method by passing in a ShoppingListItem object should add that object to the items array', () => {
      let testShoppingList = new ShoppingList();
      testShoppingList.addItem(shoppingListItem);
      expect(testShoppingList.items).to.deep.equal([shoppingListItem]);
    });

    // invoking the addItem method by passing in anything else that is not a ShoppingListItem object should immediately throw an error
    it('invoking the addItem method by passing in anything else that is not a ShoppingListItem object should immediately throw an error', () => {
      expect(shoppingList.addItem.bind(shoppingList, '1234')).to.throw(
        'Item is not a Shopping List Item'
      );
    });

    // ShoppingList has a method named removeItem that accepts a single ShoppingListItem argument
    it('ShoppingList has a method named removeItem that accepts a single ShoppingListItem argument', () => {
      expect(shoppingList).to.respondTo('removeItem');
    });

    // invoking the removeItem method by passing in a ShoppingListItem object (that exists in the items array) should remove that object from the items array
    it('invoking the removeItem method by passing in a ShoppingListItem object (that exists in the items array) should remove that object from the items array', () => {
      let testShoppingList = new ShoppingList();
      testShoppingList.addItem(shoppingListItem);
      testShoppingList.removeItem(shoppingListItem);
      expect(testShoppingList.items).to.deep.equal([]);
    });

    // invoking the removeItem method with no parameters should remove the last item in the items list, if there are any items, else it does nothing
    it('invoking the removeItem method with no parameters should remove the last item in the items list', () => {
      let testShoppingList = new ShoppingList();
      testShoppingList.addItem(shoppingListItem);
      testShoppingList.removeItem();
      expect(testShoppingList.items).to.deep.equal([]);
    });

    // invoking the removeItem method with no parameters will do nothing if there aren't any items
    it("invoking the removeItem method with no parameters will do nothing if there aren't any items", () => {
      let testShoppingList = new ShoppingList();
      testShoppingList.removeItem();
      expect(testShoppingList.items).to.deep.equal([]);
    });

    // invoking the removeItem method by passing in anything else that is not a ShoppingListItem object (that exists in the items array) should immediately throw an error
    it('invoking the removeItem method by passing in anything else that is not a ShoppingListItem object (that exists in the items array) should immediately throw an error', () => {
      expect(shoppingList.removeItem.bind(shoppingList, 'testing123')).to.throw(
        'Item not found'
      );
    });

    // ShoppingList has a method named render
    it('ShoppingList has a method named render', () => {
      expect(shoppingList).to.respondTo('render');
    });

    // calling the instance's render method will concatenate the result of calling render() on each item in this object's items array, wrapping it in a <ul> tags, and returning an html formatted string. ex: <ul>...[all the li elements from ShoppingListItem.render()]...</ul>
    it("calling the instance's render method will concatenate the result of calling render() on each item in this object's items array, wrapping it in a <ul> tags", () => {
      let testShoppingList = new ShoppingList();
      testShoppingList.addItem(shoppingListItem);
      expect(testShoppingList.render()).to.equal(
        `<ul><li class="completed_${shoppingListItem.is_done}"><span>${
          shoppingListItem.name
        }</span> <span>${shoppingListItem.description}.</span></li></ul>`
      );
    });
  });
});
