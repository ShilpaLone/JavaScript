// var arr1=[1,2,3,4];
// var arr1copy = arr1;
// var arr2 = ["a","b","c"];
// const newArray = arr2.includes("b")
// console.log(arr);

// var resultpush = arr.push(5);//add new element after last index
// var resultpush = arr.pop();//remove last element from an array
// var resultpush = arr.shift();//remove first element from an add
// var resultpush = arr.unshift(8);//add new element at first position of an array
// var result = arr1.concat(arr2);
// var result = arr1.includes(2);
// var result = arr1.join("%");

// var result = arr2.indexOf
 
// console.log(result);


//===================higher orderd method=====================

// var arr3 = [10,11,12,13,14,1,2,3,4,5,6,7,8,9];
// var arr3 =[1,2,3,4,5,9,8,7,6,];
mappedArray = arr3.map(function (elements){
    return elements + 2;     

});

// var a =mappedArray.concat(["a","d"]);
console.log(mappedArray)

var forEach = arr3.forEach(function (item) {
    return item;
});
// var b = forEaced.concat(["h","r","w"]);
// console.log(b)

 var filteredArray = arr3.filter(function (myFilterdArray) {
return myFilterdArray >=10;

});
// console.log(filteredArray);

var everyResult = arr3.every(function (elem){
    return elem > 0; 
});
// console.log(everyResult);
var someResult = arr3.some(function (currentItem){
return currentItem > 15;

});
// console.log(someResult);

 var reduceResult = arr3.reduce(function (total, current) {
    return total + current;
    
});
var arr3 = [10,11,12,13,14,1,2,3,4,5,6,7,8,9];
var reduceResult = arr3.reduce(function (total){
    return 10 > 5;
});
// console.log(arr3.some);


// var ages = [10, 14, 18, 30, 33, 44];
// document.write(ages + "<br><br>");

// var b = ages.some(checkAdult);
// document.write(b + "<br><br>");

// function checkAdult(age){
// return age >= 30;
// }




// console.log(reduceResult);
// var arr5 = [10,11,13,14,18,1,2,3,4,5,6,7];
// console.log(
// arr5.sort(function(a,b){
//   return b - a;
// }) 
// );
// var arr8 = ["123", "345", "567", "675", "564", "shilpa", "sarju", "sharli"];
// console.log(
// arr8.sort(function(a,b){
// return a < b ? 1 : -1;


// })
// );
// // console.log(arr8.sort);
// var arr9 = ["lion", "123", "?", "tiger", "123", "sparrow"];
// console.log(
// arr9.sort(function (x,z){
// return x > z ? -1 : 1;

// })
// );
// console.log(arr9.sort);


// // console.log(arr5.sort());
// var arr5 = ["sharli", "sharvary", "shilpa", "sujata", "a","b","c"];
// var someResult = arr5.sort(function (A,B) {
//     return A > B ? 1 : -1;
// })


// // console.log(arr5.sort());

// var arr = ["shilpa", "nikita", "kiran", "pooja", "ankita", "jaya"];
// var someResult = arr.sort(function (a,b) {
// return a > b ? 1 : -1;

// }) 
// console.log(arr.sort());

var arr7 = ["a", "b", "c", "d", "e", "f"];
var someResult = arr7.sort(function (c,d) {
return c > d;

})
console.log(arr7.sort());
//  var arr = ["shilpa", "pratibha", "kanchan", "nikita", "55", "66", "aaaa"];
//  var someResult = stg.sort(function(a,b) {
//  return a > b;

//  })
// //  console.log(arr.sort());