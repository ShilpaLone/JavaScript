// variable Declaration
var one = 10;
console.log("first--->", one);

var two = 50;
console.log("second--->", two);

var result = one + two;
console.log("result--->", result);

// Variable Redeclare
var one = "shilpa";
console.log(one);

// Re-assign
one = {name: "xyz", age:20 };
console.log(one);

two = {name: "shilpa", lastname: "lone"};
console.log(two);

//==============how to check types of a variable in js===============
var a = 10
var b = "ten"
var c = false;
var d = [1,2,3,4,5];
var e = { id: 1, add:"xyz"};
var f = null;
var g = undefined;
var h = function () {};

console.log("type-->", typeof h);