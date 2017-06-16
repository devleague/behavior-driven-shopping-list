var expect = chai.expect;
var should = chai.should();



describe("ShoppingListItem Class", function(){
  var shoppingListItem = ShoppingListItem;
  var myList;

  beforeEach(function(){
    myList = new ShoppingListItem("myList");
  })

  it("should be a function", function(){
    expect(shoppingListItem).to.be.a("function");
  })

  it("should have a property name", function(){
    expect(myList.name).to.be.a("string");
    expect(myList.name).to.equal("myList");
  })


})