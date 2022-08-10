//1. Write a program to display all numbers in range 58 to 98.

var lowerBound = 58;
var upperBound = 98;
console.log(" ");
console.log("Displaying all numbers in range 58 to 98");
for(var i = lowerBound; i <= upperBound; i++){
    console.log(i);
}
console.log(" ");


// 2. Write a program to display all even numbers in range 412 to 456.

var lowerBound = 412;
var upperBound = 456;
console.log(" ");
console.log("Displaying all even numbers in range 412 to 456");
for(var i = lowerBound; i <= upperBound; i++){
    if(i % 2 == 0){
    console.log(i);
    }
}
console.log(" ");


// 3. Write a program to display all odd numbers in range 581 to 623.

var lowerBound = 581;
var upperBound = 623;
console.log("Displaying all odd numbers in range 581 to 623");
for(var i = lowerBound; i <= upperBound; i++){
    if(i % 2 != 0){
    console.log(i);
    }
}
