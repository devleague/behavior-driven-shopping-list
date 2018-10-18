const expect = chai.expect;
const should = chai.should();

describe('ShoppingListItem', function () {

  let newItem;

  beforeEach(function () {
    newItem = new ShoppingListItem('drugs', 'meth');
  })
  it('should be a class', function () {
    expect(newItem).to.be.instanceOf(ShoppingListItem);
    console.log(newItem.name)
  });

  it('should have property "name"', function () {
    expect(newItem).to.have.property('name');
    expect(newItem.name).to.be.a('string');
    expect(newItem.name.length).to.be.gt(1);
  })
})