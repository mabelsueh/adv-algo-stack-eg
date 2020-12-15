class Stack {
  items = [];
  // to put an item at the top of the stack
  // does not get inserted into the bottom  
  push(data) {
    // the JS array.push add the data as the last element
    this.items.push(data);
  }

  // is to remove from the top of the stack
  pop() {
    // the JS array.pop removes the last element
    // and returns it
    return this.items.pop();
  }

  // return the next element that will be popped
  peek() {
    return this.items[this.items.length-1];
  }

  getItems() {
    return [...this.items];
  }

}

module.exports = Stack;