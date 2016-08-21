var expect = chai.expect;

describe('ShoppingListItem', function() { 
	var shoppingListItem = new ShoppingListItem();

	it('it should be a function', function(){
		expect(ShoppingListItem).to.be.a('function');
	});
	it('it should have a property "name" ', function(){
		expect(shoppingListItem).to.have.property('name');
	});
	it('it should have a property "description" ', function(){
		expect(shoppingListItem).to.have.property('description');
	});
	it('it should have a property "done" ', function(){
		expect(shoppingListItem).to.have.property('done');
	});
});

describe('New_Item', function(){
	var shoppingListItem = new ShoppingListItem("Apple", "Juicy Red Apple");
	it('it should have a name', function(){
		expect(shoppingListItem.name).to.equal("Apple");
	});
	it('it should have a description', function(){
		expect(shoppingListItem.description).to.equal("Juicy Red Apple");
	});
	describe('Check', function (){
		var shoppingListItem = new ShoppingListItem("Apple", "Juicy Red Apple", true);
		it('it should check if done is true', function (){
			expect(shoppingListItem.check).to.be.a('function');
		});
	});
	describe('Uncheck', function (){
		var shoppingListItem = new ShoppingListItem("Apple", "Juicy Red Apple", false);
		it('it should check if done is false', function(){
			expect(shoppingListItem.uncheck).to.be.a('function');
		});	
	});
	describe('Render', function(){
		it('it should be a string', function(){
			expect(shoppingListItem.render).to.be.a('string');	
		});
	});
});
