// var chai = require('chai'); dont need this cause we're in the browser.


describe("ShoppingListItem", function () {

    let marksList;

    beforeEach(() => {
        marksList = new ShoppingListItem("cheese", "the smellier the better!");
    });

    //beforeEach, before, afterEach, and After; these methods will execute the code inside depending on which method is called. beforeEach will instantiate a new shoppingListItem for every single test before it runs.

    it("is a class", function () {
        //write code here;
        expect(marksList).to.be.instanceof(ShoppingListItem);
    });

    it("has a property named name", function () {
        //write code here;
        // expect(marksList.name).to.be.a("string");
        // expect(marksList.name).to.equal("cheese");
        expect(marksList).to.have.property("name");
    });

    it("has a property named description", function () {
        //write code here;
        // expect(marksList.description).to.be.a("string");
        // expect(marksList.description).to.equal("smelly");
        expect(marksList).to.have.property("description");
    });

    it("has a property named is_done", function () {
        //write code here;
        expect(marksList.is_done).to.be.undefined;
    });

    it("has a constructor method that accepts 2 arguments, (name and description)", function () {
        //the constructor must make a two new instances of name and description using the arguments we will pass in later
        //write code here;
        expect(marksList).to.be.instanceof(ShoppingListItem);
    });

    it("has a method named check", function () {
        //calling the instance's check method will set it's is_done property to TRUE;
        //write code here;
        expect(marksList.check).to.be.a('function');
    });

    it("has a method named uncheck", function () {
        //calling the instance's uncheck method will set it's is_done property to FALSE;
        //write code here;
        expect(marksList.uncheck).to.be.a('function');
    });

    it("has a method named render", function () {
        //returns a specified html formatted string. look at the github repo for additional details;
        expect(marksList.render).to.be.a('function');
    });
});



// let newList;

describe("ShoppingList", () => {

    let newList;
    let newItem;
    let testShoppingList;

    beforeEach(() => {
        newList = new ShoppingList();
    });

    it("ShoppingList is a class", () => {
        //write code below;
        assert.typeOf(ShoppingList, "function");
    });

    it("ShoppingList has a property named items", () => {
        //write code below;
        expect(newList).to.have.property("items");
    });

    it("ShoppingList has a constructor method that initializes items as an empty Array", () => {
        //write code below;
        expect(newList.items).to.be.a('array');
    });


    describe("addItem", () => {
        it("has a method addItem that accepts one ShoppingListItem argument", () => {
            //write code below;
            expect(newList).to.respondTo("addItem");
        });

        it("invoking addItem on a ShoppingListItem object will add object to items array", () => {
            //wrote code below;
            testShoppingList = new ShoppingList();
            newItem = new ShoppingListItem("pizza", "very yummy cheese thing");
            testShoppingList.addItem(newItem);
            // expect(testShoppingList)
        });

        it("invoking addItem that is not a ShoppingListItem will throw an error", () => {
            //write code below;

        });
    });



    describe("removeItem", () => {
        it("has a method removeItem that accepts one ShoppingListItem argument", () => {
            //write code below;
        });

        it("invoking removeItem should remove object from the items array", () => {
            //write code below;
        });

        it("invoking removeItem with no parameters will remove last item in the items array. If there are no items in the array then the method will do nothing", () => {
            //write code below;
        });

        it("invoking removeItem with an item that is not a ShoppingListItem object will throw an error", () => {
            //write code below;
        });

    });








    describe("render", () => {
        it("has a method named render", () => {
            //write code below;
        });

        it("calling render method REST OF TEST EXPLANATION HERE", () => {
            //write code below.
        });
    });

});