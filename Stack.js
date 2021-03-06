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

  // return true if stack is empty
  isEmpty() 
  {  
  return this.items.length == 0; 
  } 


  // returns string with all the element of stack concatenated
  printStack() 
  { 
     var str = ""; 
     for (var i = 0; i < this.items.length; i++) 
         str += this.items[i] + " "; 
     return str; 
  } 

//   returns length of the stack (pls try out)
  length() {
     return this.top;
  }
}

module.exports = Stack;