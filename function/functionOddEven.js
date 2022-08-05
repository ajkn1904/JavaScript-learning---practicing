/* Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter */



//● Has return + Has parameter
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
let result = odd_even(num1);
console.log();



//● No return + Has parameter
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