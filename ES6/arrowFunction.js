/* 1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */

const mul = (num1, num2, num3) => num1 * num2* num3;
console.log('');
console.log(mul(3, 5, 2));
console.log('');

/* 2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */

const threeLines =() =>`I am a web developer.
I love to code.
I love to eat biryani.
`
console.log('');
console.log(threeLines());
console.log('');

/* 3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

const arrowWithDefault = (num1, num2 = 5) => {
    sum = num1 + num2;
    return sum;
}
console.log('');
console.log(arrowWithDefault(7));
console.log('');