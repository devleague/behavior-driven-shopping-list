/*
- ShoppingListItem has a method named `render`
  -  calling the instance's `render` method 
  will construct and return an html formatted 
  string. the string content will be wrapped in 
  "<li>" tags.  `<li class="completed_[is_done]"><span>[name]</span> <span>[description]</span></li>`.   example: `<li class="completed_false"><span>Avocado</span> <span>Must be eaten immediately.</span></li>
  */
function ShoppingListItem (name, description) {
	this.name = name;
	this.description = description;
	this.done = false;
}

ShoppingListItem.prototype.check = function() {
	this.done = true;
};

ShoppingListItem.prototype.uncheck = function() {
	this.done = false;
};

ShoppingListItem.prototype.render = function (){
	return '<ul> + <li class="completed_[done]"> + <span>Apple</span> + <span>Must be eaten immediately.</span>+ </li> + </ul>';
};