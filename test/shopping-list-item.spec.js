var expect = chai.expect;

describe('ShoppingListItem', function () {
  var item;

  beforeEach(function() {
    item = new ShoppingListItem('Soda', 'Carbonated', 'Drunk');
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

  it('it should have a property name "is_done"', function () {
    expect(item).to.have.property('is_done');
    expect(item.is_done).to.equal('Drunk');
  });
});