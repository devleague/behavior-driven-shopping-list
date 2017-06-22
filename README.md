# Behavior Driven Shopping List

Fork and clone this project.
Goal: Create a working, single page app.

This project has 3 parts.

1. The Shopping List BDD tests
2. Building the Shopping List classes to make tests pass
3. Rendering a shopping list to the browser

use http-server to test and run your app

----

## 1. The Shopping List BDD tests

Setup Mocha and Chai to run tests on your application in the browser.

````
Shopping-List/
  node_modules/
    mocha/
    chai/
  js/
    shopping_list_test.js
  tests.html
````
Write tests for the shopping list application.
The tests should describe the following shopping list functionality:

#### ShoppingListItem

- ShoppingListItem is a class
- ShoppingListItem has a property named `name`
- ShoppingListItem has a property named `description`
- ShoppingListItem has a property named `is_done`
- ShoppingListItem has a constructor method that accepts 2 arguments, `name` and `description`
  - the constructor method sets the new instances `name` and `description` properties using the arguments passed in
- ShoppingListItem has a method named `check`
  -  calling the instance's `check` method will set it's `is_done` property to true
- ShoppingListItem has a method named `uncheck`
  -  calling the instance's `uncheck` method will set it's `is_done` property to false
- ShoppingListItem has a method named `render`
  -  calling the instance's `render` method will construct and return an html formatted string. the string content will be wrapped in `<li>` tags.  `<li class="completed_[is_done]"><span>[name]</span> <span>[description]</span></li>`.   example: `<li class="completed_false"><span>Avocado</span> <span>Must be eaten immediately.</span></li>`

hint: Use ES6 [string templates](http://tc39wiki.calculist.org/es6/template-strings/) for your render method

example:

````

var some_html_output = '<ul> \
  <li class="completed_false"> \
    <span>Avocado</span> \
    <span>Must be eaten immediately.</span> \
  </li> \
<ul>';

````

#### ShoppingList

- ShoppingList is a class
- ShoppingList has a property named `items`
- ShoppingList has a constructor method that initializes `items` as an empty Array
- ShoppingList has a method named `addItem` that accepts a single ShoppingListItem argument
  - invoking the `addItem` method by passing in a ShoppingListItem object should add that object to the `items` array
  - invoking the `addItem` method by passing in anything else that is not a ShoppingListItem object should immediately throw an error
- ShoppingList has a method named `removeItem` that accepts a single ShoppingListItem argument
  - invoking the `removeItem` method by passing in a ShoppingListItem object (that exists in the `items` array) should remove that object from the `items` array
  - invoking the `removeItem` method with no parameters should remove the last item in the `items` list, if there are any items, else it does nothing
  - invoking the `removeItem` method by passing in anything else that is not a ShoppingListItem object (that exists in the `items` array) should immediately throw an error
- ShoppingList has a method named `render`
  - calling the instance's `render` method will concatenate the result of calling `render()` on each item in this object's `items` array, wrapping it in a `<ul>` tags, and returning an html formatted string. ex: `<ul>...[all the li elements from ShoppingListItem.render()]...</ul>`


### test.html

Standard html5 document
Before the end of this body tag, include your test library dependencies and your test file. You should be able to run your tests with all tests failing, commit and push your work.


## 2. Building the Shopping List classes to make tests pass

Create implementation files.
`shopping_list_item.js`
`shopping_list.js`

````
Shopping-List/
  node_modules/
    mocha/
    chai/
  js/
    shopping_list_item.js
    shopping_list.js
    shopping_list_test.js
  tests.html
````

### index.html

Standard html5 document
Before the end of this body tag, include your 2 shopping list scripts.


### shopping_list_item.js

Create a class that defines `ShoppingListItem`.
`ShoppingListItem` will have all the properties and methods defined in the BDD spec above.


### shopping_list.js

Create a class that defines `ShoppingList`.
`ShoppingList` will have all the properties and methods defined in the BDD spec above.


Once all tests pass, commit and push.


## 3. Rendering a shopping list to the browser

Create implementation files.
`index.html`
`shopping_list_item.js`
`shopping_list.js`
`app.js`

````
Shopping-List/
  node_modules/
    mocha/
    chai/
  js/
    shopping_list_test.js
    shopping_list_item.js
    shopping_list.js
    app.js
  tests.html
  index.html
````

### index.html

Standard html5 document, include a single empty `div` element with an id of `content`
before the end of this body tag, include your 3 shopping list scripts.

Create a form that has 2 text fields, `title` and `description`.

Add a `button` element with the contents of "Add to Shopping List", and give it an id of `add_shopping_list_item_button`.

Add a `click` event handler to the `add_shopping_list_item_button` that will run a function called `add_to_shopping_list()`. [http://www.w3schools.com/jsref/event_onclick.asp](http://www.w3schools.com/jsref/event_onclick.asp)

### app.js

Create an instance of ShoppingList.

Invoke the shopping_list object's render() method, and store the output to a variable. Write the resulting output html into the `content` div. [http://www.w3schools.com/jsref/prop_html_innerhtml.asp](http://www.w3schools.com/jsref/prop_html_innerhtml.asp)

Create an `add_to_shopping_list` function that will read the value of the `title` and `description` fields, then create a new variable named `new_shopping_list_item` that will store the result of constructing a new ShoppingListItem and passing in the values of `title` and `description`.

Invoke your shopping list's `addItem` by passing in your `new_shopping_list_item`.

Re-render the shopping list.

Commit and push your work

## 4. Check and Uncheck shopping list items

Modify the ShoppingListItem `render()` method to include a `checkbox` input. Add an `onchange` event listener to this checkbox that will call a function named `changeCheckedStatus(idx, checkbox)` where 'idx' is the position (array index) of the ShoppingListItem, and 'checkbox' is the actual checkbox element. [http://www.w3schools.com/jsref/prop_checkbox_checked.asp](http://www.w3schools.com/jsref/prop_checkbox_checked.asp)


### app.js

#### changeCheckedStatus()

create a `changeCheckedStatus` function that accepts two arguments, idx and checkbox.
it will find a ShoppingListItem based on the idx passed in to the function.
determine if the checkbox that has been clicked, is now checked or not checked. [http://www.w3schools.com/jsref/event_onchange.asp](http://www.w3schools.com/jsref/event_onchange.asp)
if the checkbox is checked,
 invoke the shopping_list_item object's `check()` method.
if the checkbox is not checked,
 invoke the shopping_list_item object's `uncheck()` method.

Commit and push your work.


## 5. Remove shopping list items

Modify the ShoppingListItem `render()` method to include a `button` element with the label `x`. Add a `click` event listener to this button that will call a function named `removeItemButtonClicked(idx)` where 'idx' is the position (array index) of the ShoppingListItem.

### app.js

#### removeItemButtonClicked()

Create a `removeItemButtonClicked` function that accepts a single argument, idx.
It will find a ShoppingListItem based on the idx passed in to the function.
It will call the shopping_list instance's `removeItem` method, while passing in the found ShoppingListItem object as an argument. Then, re-render the shopping list.

Commit and push your work.

## Stretch Goals
When you finish all of the items above, you can work on these additonal stretch goals.

* Ask a TA or instructor for a code review.
* When you check an item off on your shopping list, strike it out on the DOM.
* Make it look like a shopping list app that you would want to use. Great creative with the UI and UX.
