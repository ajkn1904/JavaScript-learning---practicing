/* You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

var fruits = ['Apple', 'Banana', 'Orange'];

//a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);
fruits[indexOfBanana] = 'Mango';
console.log(fruits);

//b) Remove ‘Orange’ and add ‘Watermelon’
fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);