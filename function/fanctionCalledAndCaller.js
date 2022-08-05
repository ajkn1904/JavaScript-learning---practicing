/* Write a function called foo() which prints "foo" and a funtion called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the function foo() to see the output.*/

function foo(){
    console.log("Foo");
    bar();
}

function bar(){
    console.log("Bar");
}


console.log();
console.log("The output is: ");

foo();
console.log();