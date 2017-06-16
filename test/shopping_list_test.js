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
    expect(cake.is_done).to.equal(true);
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
      expect(cake.render()).to.equal(`$<li>`)
    })
  })

})

describe("ShoppingList Class", function(){
  var shoppingList = ShoppingList;
  var myList;


  beforeEach(function(){
    myList = new ShoppingList("myList");
  })

  it("should be a function", function(){
    expect(shoppingList).to.be.a("function");
  })

  it("should have a property items", function(){
    expect(myList.items).to.deep.equal([]);
  })

  describe("addItem method", function(){
    it("should have method addItem", function(){
      myList.addItem.should.be.a("function");
      myList.addItem("cake");
      expect(myList.items).to.deep.equal(["cake"]);
    })
  })

  describe("removeItem", function(){
    it("should have method removeItem", function(){
      myList.removeItem.should.be.a("function");
    })
  })




})