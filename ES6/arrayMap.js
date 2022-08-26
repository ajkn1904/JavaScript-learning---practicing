/* 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */

const oddArray = [ 1, 3, 5, 7, 9 ];

// with map
console.log('with map');
const evenArry = oddArray.map(nums => {
    return (nums + 1);
});
console.log('');
console.log(evenArry);
console.log('');

// with for loop
console.log('with for loop');
let evenNum = [];
for(let i = 0; i<oddArray.length; i++){
    evenNum.push(oddArray[i] + 1);
}
console.log('');
console.log(evenNum);
console.log('');

// with for of loop
console.log('with for of loop');
const result = [];
for(number of oddArray){
    result.push(number + 1);
    //console.log(number);
}
console.log('');
console.log(result);
console.log('');