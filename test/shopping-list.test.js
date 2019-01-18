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

  describe('Item Name', () => {
    let soup = new ShoppingListItem('name');

    it('should have a name property', () => {
      expect(soup.name).to.equal('name');
    });

    it('should be a string', () => {
      expect(typeof soup.name === 'string').to.be.true;
    });
  });

  describe('Item Description', () => {
    let soup = new ShoppingListItem("Cambell's", 'Tomato Soup');

    it('should have a description property', () => {
      expect(soup.description).to.equal('Tomato Soup');
    });

    it('should be a string', () => {
      expect(typeof soup.description === 'string').to.be.true;
    });
  });

  it('should have a isDone property', () => {
    let soup = new ShoppingListItem("Cambell's", 'Tomato Soup');
    expect(soup.isDone).to.equal(false);
  });

  it('should have a constructor method that accepts 2 arguments, name & description', () => {
    let soup = new ShoppingListItem("Campbell's", 'Tomato Soup');
    expect(soup.name === "Campbell's" && soup.description === 'Tomato Soup').to
      .be.true;
  });

  describe('item check method', () => {
    it('should set the isDone property to true when calling the insances check method', () => {
      let soup = new ShoppingListItem("Campbell's", 'Tomato Soup');
      soup.check();
      expect(soup.isDone).to.be.true;
    });
  });

  describe('item uncheck method', () => {
    it('should set the isDone property to false when calling the insances uncheck method', () => {
      let soup = new ShoppingListItem("Campbell's", 'Tomato Soup');
      soup.check();
      soup.uncheck();
      expect(soup.isDone).to.be.false;
    });
  });

  describe('Render method', () => {
    let soup = new ShoppingListItem("Campbell's", 'Tomato Soup');
    it('should return an html formatted string', () => {
      let rendered = soup.render;
      expect(typeof rendered === 'string').to.be.true;
    });
    it('should be a function', () => {
      expect(soup.render).to.be.a('function');
    });
    it('string content should be wrapped in <li> tags', () => {
      let beginningTag = rendered.slice(0, 3);
      let endTag = rendered.slice(rendered.length - 3);
      expect(`${beginningTag}${endTag}`).to.equal('<lili>');
    });
  });
});
