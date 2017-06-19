var expect = chai.expect;
var should = chai.should();



describe("ShoppingListItem Class", function(){
  var shoppingListItem = ShoppingListItem;
  var cake;

  beforeEach(function(){
    cake = new ShoppingListItem("cake", "frosting", true);
  })

  it("should be a function", function(){
    expect(shoppingListItem).to.be.a("function");
  })

  it("should have a property name", function(){
    expect(cake.name).to.be.a("string");
    expect(cake.name).to.equal("cake");
  })

  it("should have property name description", function(){
    expect(cake.description).to.equal("frosting");
  })

  it("should have a property is_done", function(){
    expect(cake.is_done).to.equal(false);
  })

  describe("check method", function(){
    it("should have method check", function(){
      //expect(cake.check).to.be.a("function");
      expect(cake.check()).to.equal(true);
    })
  })

  describe("uncheck method", function(){
    it("should have method uncheck", function(){
      expect(cake.uncheck()).to.equal(false);
    })
  })

  describe("render method", function(){
    it("should have method render", function(){
      expect(cake.render()).to.equal(`<li class=completed_${cake.isDone}><span>${cake.name}</span> <span>${cake.description}</span></li>`)
    })
  })

})

describe("ShoppingList Class", function(){
  var shoppingList = ShoppingList;
  var myList;
  var steak = new ShoppingListItem("Ribeye");
  var eggs = new ShoppingListItem("Egg Whites");


  beforeEach(function(){
    myList = new ShoppingList();
  })

  it("should be a function", function(){
    expect(shoppingList).to.be.a("function");
  })

  it("should have a property items", function(){
    expect(myList.items).to.deep.equal([]);
  })

  describe("addItem method", function (){
    it("should have a method addItem and has a single ShoppingListItem argument", function(){
      expect(myList.addItem).to.be.a("function")
    })

    it("should have a instance of ShoppingListItem", function(){
      myList.addItem(steak);
      expect(steak instanceof ShoppingListItem).to.equal(true);
    })

    it("should throw error if item is not an instanceof ShoppingListItem", function (){
      expect(myList.addItem).to.throw("This item is not on shopping list");
    })

  describe("removeItem method", function(){
    it("should have a method removeItem and has a single ShoppingListItem argument", function(){
      expect(myList.removeItem).to.be.a("function")
    })

    it("should remove the object from the ShoppingList", function(){
      myList.addItem(steak)
      myList.removeItem(steak)
      expect(myList.items).to.not.include(steak)
    })

    it("should remove the last item if no argument is passed", function(){
      myList.addItem(steak);
      myList.addItem(eggs);
      myList.removeItem();
      myList.items.should.not.contain(eggs);
    })
  })

  describe("render method", function(){
    it("should create a unordered list of the items array", function(){
      expect(`ul`)
    })
  })




})

})