/*1. Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result. */

const arrName = ['abul', 'babuli', 'dabu', 'gab', 'mabulla'];
const newArr = [];

const arrLen = (nums) =>{
    for(let i = 0; i<nums.length; i++){
       if(nums[i].length % 2 === 0){
        newArr.push(nums[i]);
    };
    }
    return(newArr);
};

console.log('Array with Even lenght is: ', arrLen(arrName)) ;

/*2. Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */

const arrowSumAvg = (nums) =>{
    let sum = 0;
    let avg = 0;
    let square = 0;
    for(let i = 0; i<nums.length; i++){
    square = Math.pow(nums[i], 2);
    sum = sum + square;
    avg = sum / (nums.length);
}
return avg;
};

const arrNum = [3, 5, 2, 7, 8, 1, 4];
console.log('Average is: ', arrowSumAvg(arrNum));

/*3. Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. */
const maxNumOfArray = (nums1, nums2) =>{
    const newArr = [...nums1, ...nums2];
    const max = Math.max(...newArr);
    return max;
};

const arr1 = [2, 3, 0, 1, 9];
const arr2 = [11, 4, 17, 3, 5];

console.log('Maximum value is: ', maxNumOfArray(arr1, arr2));