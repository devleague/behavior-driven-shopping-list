const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;


describe('ShoppingListItem', () => {

  const item = new ShoppingListItem;

  it('should be a class', () => {
    expect(item).to.be.a('function');
  });

  it('should be an instance of ShoppingListItem class', () => {
    expect(item instanceof ShoppingListItem).to.be.true;
  });

});