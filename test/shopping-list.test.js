const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
const item = require('../js/shopping-list-item.js');
const list = require('../js/shopping-list.js');

let ShoppingListItem = item.ShoppingListItem;

describe('ShoppingListItem', () => {
  const ShoppingItem = new ShoppingListItem();

  it('should be a class', () => {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should be an instance of ShoppingListItem class', () => {
    expect(ShoppingItem instanceof ShoppingListItem).to.be.true;
  });

  it('should have a name', () => {
    let soup = new ShoppingListItem('name');
    expect(soup.name).to.equal('name');
  });

  it('should have a description', () => {
    let soup = new ShoppingListItem("Cambell's", "Tomato Soup");
    expect(soup.description).to.equal('Tomato Soup');
  });
});
