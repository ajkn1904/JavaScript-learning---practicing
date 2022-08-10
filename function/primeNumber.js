//Write a function to find if a number is prime.

function primeCheck(num){
var number = 'Prime';
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            number = 'So, it is Not Prime';
            console.log('The number,', num, 'is divisible by', i);
            break;
        }
    }
    return number; 
} 


let num =  3309;
console.log();
console.log(primeCheck(num));
console.log(); 
