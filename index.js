// good for cards or something

const Stack = require('./Stack')

// let plates = new Stack();
// plates.push("Plate A"); = A gets inserted
// plates.push("Plate B"); = Then B gets inserted on top of A
// plates.push("Plate C"); = Then C gets inserted on top of B

// console.log("Popping the plates");
// console.log(plates.pop()); = removes C
// console.log(plates.pop()); = removes B
// console.log(plates.pop()); = removes A

// Matching parenthesis (ensuring things come in pairs)
// let a = { = first '{' gets pushed into the stack
//   b:function(){ = first '(' gets pushed into the stack, when ')' is detected, 
//                   '(' gets popped out and checked to see if it matches the detected ')'
//                   if it matches, the () gets does not go back into the stack and is treated as no error 
//   }             = Rinse and repeat for the remaining parantheses
// }

// let stack = new Stack();
// for (let c of test) {
//   if (c == '(' || c=='{') {
//     stack.push(c);
//   }
//   else if (c == ')') {
//     let p = stack.pop();
//     if (p != '(') {
//       console.log("error!")
//       console.log("Unexpected )");
//       break;
//     }
//   }
//   else if (c == '}') {
//     let p = stack.pop();
//     if (p != "{") {
//       console.log("Error~");
//       console.log("Unexpected }")
//     }
//   }
//  }
//  if (stack.peek()) {
//    console.log("No closing match for " + stack.pop())
//  }

// push in order
let text = "She sells seashell";
let stack = new Stack();
for (let c of text) {
 stack.push(c);
}

// pop in order, will get characters in reverse order e.g. l l e h s
let result = "";
while (stack.getItems().length > 0) {
  result += stack.pop()
}
console.log(result);
// hence this method can be used to reverse the order of things
// e.g. for sort by Z-A or back button