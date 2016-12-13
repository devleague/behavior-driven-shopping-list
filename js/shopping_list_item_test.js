
/*jshint esversion: 6*/

console.log('**mocha**', mocha)
console.log('**chai**', chai)

const should = chai.should();
const expect = chai.expect;

describe ('ShoppingListItem', () => {

  let pizza;

  beforeEach(() => {
    pizza = new ShoppingListItem('pizza', 'a slice of pizza');
  })

  it('should be a class', () => {
    pizza.should.be.a.function
  })

  it('should have a constructor argument called name', () => {
    pizza.should.have.property('name')
  })

  it('should have a constructor argument called description', () => {
    pizza.should.have.property('description')
  })

  it('should have a constructor method that accepts 2 arguments (name) and (description)', () => {
    pizza.constructor.should.have.length(2)
  })

  it('should have a method called check', () => {
    pizza.should.be.a.function
    pizza.check();
    pizza.is_done.should.equal(true);
  })

  it('should have a method called uncheck', () => {
    pizza.should.be.a.function
    pizza.uncheck();
    pizza.is_done.should.equal(false);
  })

  it('method "render" should return an HTML string', () => {
   render.should.be.a.function
   pizza.render();
   render.should.have.property('string');
  })



})
