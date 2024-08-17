// var vs let vs const
// Scope(scope is certain region of program where variables exist can be recognised)
// types of scopes(Global block and functional scope)

// function name(){
// example of function scope
// }
// var is functional scope let and const are block scope
// { block scope}

// var a = 5 (Global scope)

// variable shadowing (while shadowing of variables it should not cross boundary of scope)

// function test() {
//   let a = "Hello";

//   if (true) {
//     let a = "Hi";
//     console.log(a);
//   }
//   console.log(a);
// }

// test();

// illegal shadowing (we can shadow var variable with let or const but cant do opposite if we do so it is called illegal shadowing);

// example of shadowing
// function test(){
//     var a = "hello";
//     let b = 'Bye';

//     if(true){
//         let a = "hi";
//         var b = 'GoodBye'
//     }
// }
// test()

// -----Declaration and initialization
// Declaration of variables(let and const are block scoped and cannot be redeclared)
// const a (const varaible unless initailizes cannot be declared)
//  reinitialisation can be done with let and var but cannot be done with const
// exp : const a = 6; a=7 (cannot be done in const variable)

// Hoisting
// during the memory creation phase of execution context variables and function declaration are moved to top by js engine

//  var variable are hoisted

// console.log(count); (undefined keyword is printed in console)
// var count;

// let and const variables are also hoisted but in temporal dead zone
// Temporal deadzone is time between declaration and initialsation of let and const variables
// console.log(count); (cannot access count before initialzation - Reference error)
// let count = 1;

function abc() {
  console.log(a);

  var a = 10;
}

abc();
