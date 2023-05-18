/* Create a Fibonacci series and store the values into an array variable. You will be given an input (n) which will indicate the index number of the Fibonacci series you created. Traverse through the series from start to the nth index of series and return the sum of elements. Then after printing the sum, split the sum numbers you got and print them separately.

Input: 6
Output:
12
1
2
 */



function fib(n) {

    for (let i = 2; i <= n; i++) {
        fib_Series[i] = fib_Series[i - 1] + fib_Series[i - 2];
    }

    let sum = fib_Series.reduce((num1, num2) => (num1 + num2), 0);
    return sum;
}


let fib_Series = [0, 1];
let index = 8;

let fibonacciSum = fib(index);
console.log('The sum is: ', fibonacciSum);


let splitDigits = fibonacciSum.toString().split('');
splitDigits.map(digit => console.log(digit)); 


