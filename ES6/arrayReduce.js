/* 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

const array = [ 1, 9, 17, 22 ];
const initialValue = 0;
const result = array.reduce((nums, items) => {
    return (nums + items);
}, initialValue);

console.log('');
console.log(result);
console.log('');

/* 2) const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];
 Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. */

const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];

//with for of loop
let sum = 0;
for(number of people){
  sum = sum + number.age; 
}
console.log('');
console.log('with for of loop');
console.log(sum);
console.log('');


//with array.reduce() method 
const resultOf2 = people.reduce((nums, items) =>{
    return (nums + items.age);
}, initialValue);
console.log('');
console.log('with array.reduce() method');
console.log(resultOf2);
console.log('');