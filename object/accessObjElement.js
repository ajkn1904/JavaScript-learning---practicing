/* pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
}
এবং pepperoni প্রিন্ট করবা। */

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
   }

console.log();
console.log();
console.log();

var findProp = Object.keys(pizza);
console.log("Finding the keys of the object: ", findProp);
console.log();

var findPropValue = Object.values(pizza.toppings);
console.log("Finding the values of the object: ", findPropValue);
console.log();

var findPropValueIndex = pizza.toppings.indexOf('pepperoni');
console.log("Finding the index of a value of an array inside the object: ", findPropValueIndex);
console.log();

var findElemnt = pizza.toppings[2];
console.log("---------------------------");
console.log("Now, printing a value from the array inside the object is: ", findElemnt);
console.log();
console.log();