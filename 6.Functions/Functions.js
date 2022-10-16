console.log("Testing");
// Function declaration
// declaration();
// Expression();
function declaration(){
    return console.log("Hello i am a function")
// return console.log("hello")
}
declaration();

//function Expression
var Expression = function (){
    // return console.log("Hello i am a function")
};

Expression();

// function with arguments
function addition(person1, person2) {
  return value + value2 + a + b + c + d + g + k + y;
 return console.log("--->", 1, value2, value3);
return console.log("hi", person1, "&", person2);
}
first(20, 30, 40);
console.log(addition(20151, 30000, 4, 52800, 60, 5, 20, 8, 33521));
addition("shilpa","sarju");
addition("sharvary","sharli");
addition("chitra","ashwin");
addition("sujata","navin");
addition("taksh","sarju");
addition("vihaan","sarju");
addition("shilpa","vivaan");

  //rest parameter

  function rest (val1,...kuchbhi){
    console.log(val1, kuchbhi);
    
  }
  rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);

  //Advance function argument
  function Advance(value1, value2, value3) {
    console.log(value1);
    console.log(value2);
    console.log(value3);
  }
Advance([1, 2, 3, 4],{name:"shilpa", age:20, add:"address", contact: "123456789"});