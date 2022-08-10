/* You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

var fruits = ['Apple', 'Banana', 'Orange'];

//a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
console.log();
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);

console.log();
fruits[indexOfBanana] = 'Mango';
console.log(fruits);

//b) Remove ‘Orange’ and add ‘Watermelon’
console.log();
fruits.pop();
console.log(fruits);

console.log();
fruits.push('Watermelon');
console.log(fruits);