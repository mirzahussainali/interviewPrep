// var let and const
// scope (scope is certain region of program where defined variable exist and can be recognised and beyond that cannot be recognised)

{
  const a = 5;
}
// console.log(a); // reference error because a is declared using let

// variable shadowing
// in javascript introduction of let and const in es6 along with block scope allows variable shadowing

function test() {
  let a = "hello";
  if (true) {
    let a = "Hi";
    console.log(a);
  }
  console.log(a);
}

test();

// we can shadow var variable using let but cannot do same else will be called illegal shadowing
// shadowing let with var is called illegal shadowing

// let and const cannot be redeclared in same scope but var can be redeclared as many times

// declaration without initialization

// let and var can be used with out initialization but we need to initialize with const

// hoisting

// in hoisting execution context declares variables and function declarations at top of code during memory creation phase and when execution happens it checks the variable exists during creation phase
console.log(count);
var count = 1;

// let and const variables are hoisted in temporal dead zone

// temporal deadzone is time between declaration and initialization of let and const variable

function abc() {
  console.log(a);

  var a = 20;
}

abc(); // undefined

function bcc() {
  console.log(a, b, c);

  var a = 1;
  let b = 5;
  const c = 10;
}

bcc(); // reference error
