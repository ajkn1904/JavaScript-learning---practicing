/* 1. Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter */



 // 1(a)● Has return + Has parameter
function odd_even(number1){
    if(number1 % 2 == 0){
        const strEven = console.log("The number", number1, "is even");
        return strEven;
    }
    else{
        const strOdd = console.log("The number", number1, "is odd");
        return strOdd;
    }
}

var num1 = 265;
console.log();
var result = odd_even(num1);
console.log();



// 1(b)● No return + Has parameter
function odd_even2(number2){
    if(number2 % 2 == 0){
        console.log("The number", number2, "is even");
    }
    else{
        console.log("The number", number2, "is odd");
    }
}

var num2 = 268;
console.log();
odd_even2(num2);
console.log(); 


/* 2. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে। */

function ageOddEven(age){
    if(age % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const age = 657;
console.log();
const myAge = console.log("My age", age, "is even.", ageOddEven(age));
console.log();


/* 3. Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers. */

function findOddSum(numbers){
    let sum = 0;
    for(var i = 0; i <numbers.length; i++){
     if(numbers[i] % 2 === 1){
        var oddValue = numbers[i];
        console.log("Odd number from the array: ", oddValue)
        sum = sum + numbers[i];
        }   
    }
    return sum;
}

const array = [5, 7, 8, 10, 45, 30];

console.log();
var result = console.log("The sum of the odd elements of the array is:", findOddSum(array));
console.log();
