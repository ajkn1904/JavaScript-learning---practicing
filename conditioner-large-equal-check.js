/* 1. You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal */

//solving 1

var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 < num2){
    if(num2 < num3){
        console.log("largest Number is: ", num3);
    }
    else{
        console.log("largest Number is: ", num2);
    }   
}
else{
    if(num1 > num3){
        console.log("largest Number is: ", num1);
    }
    else{
    console.log("largest Number is: ", num3);
    }
}
//solving 2

var side1 = 9;
var side2 = 8;
var side3 = 9;
if(side1 == side2 || side2 == side3 || side3 == side1){
    console.log("Isosceles");
}
else{
    console.log("Not Isosceles"); 
}