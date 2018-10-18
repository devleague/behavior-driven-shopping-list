class ShoppingList {
  constructor () {
    this.items = [];
  }

  addItem(obj){
    this.items.push(obj);
  }

  removeItem(obj){
    if(this.items){
      this.items.splice(ShoppingList.indexOf(obj),1)
    }else if(obj = null) {
      return ShoppingList.pop();
    }else{
      return "Item not found"
    
}
  }
};