/* Write a fuinction called make_avg() which will take three integers and return the average of those values.*/

function make_avg (a, b, c){
    const sum = a + b + c;
    console.log("Sum of 3 numbers is: ", sum);
    const avg = sum / 3;
    return avg;
}

var num1 = 39;
var num2 = 15;
var num3 = 20;
console.log();
const returnedValue = make_avg(num1, num2, num3);
const averageIs = returnedValue.toFixed(2);
console.log("Average is: ", averageIs);
console.log();


