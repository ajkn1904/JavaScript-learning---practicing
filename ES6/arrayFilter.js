/* 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. */

const array = [33, 50, 79, 78, 90, 101, 30 ];

const result  = array.filter(nums =>{
    if(nums % 10 === 0){
        return (nums);
    }
});

console.log('');
console.log(result);
console.log('');

//or
console.log('');
console.log('or')
array.filter(nums =>{
    if(nums % 10 === 0){
        console.log(nums);
    }
});
console.log('');
