/* Write a function findOddSum() that will take array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.  */

function findOddSum(numbers){
let sum = 0;

    for( let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 1){
            sum = sum + numbers[i];
            
        }
    }
    return sum;
}

let array = [5, 7, 8, 10, 45, 30];

console.log();
console.log(findOddSum(array));
console.log();