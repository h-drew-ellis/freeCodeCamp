//Lesson 45
//Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();
// * Best Practices * : When writing Functions, every action to your function should be on its own line

//Lesson 46
//Passing Values to Functions with Arguments
function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
}
functionWithArgs(2, 3);

// ** When it comes to arguments, it really doesn' matter what you name them, as long as within your function you call on it exactly.

//Lesson 47
//Global Scope and Functions
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

//Lesson 48
//Local Scope and Functions
function myLocalScope() {
    'use strict';
  
    // Only change code below this line
    var myVar = 10;
    console.log('inside myLocalScope', myVar);
  }
myLocalScope();

//Lesson 49
//Global vs. Local Scope in Functions
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
  }

//Lesson 50
//Return a Value from a Function with Return
function timesFive(num) {
    return num * 5;
  }
  timesFive(5);

//Lesson 51
//Understanding Undefined Value returned from a Function
  function addFive() {
      sum = sum + 5;
  }

//Lesson 52
//Assignemnt with a Returned Value
var processed = processArg(7);

//Lesson53
//Stand in Line
function nextInLine(arr, item) {
    return arr.push(item), arr.shift(item);
  }
