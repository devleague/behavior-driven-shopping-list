var expect = chai.expect;

describe('ShoppingListItem', function () {
  var item;

  beforeEach(function() {
    item = new ShoppingListItem('Soda', 'Carbonated');
  });

  it('it should be a function', function () {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('it should have a property named "name"', function () {
    expect(item).to.have.property('name');
    expect(item.name).to.equal('Soda');
  });

  it('it should have a property named "description"', function() {
    expect(item).to.have.property('description');
    expect(item.description).to.equal('Carbonated');
  });
});