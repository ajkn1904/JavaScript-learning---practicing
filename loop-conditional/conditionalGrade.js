/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else. */

var score = 85;

if(score>=80){
    console.log('A');
}
else if(score>=60 && score<=79){
    console.log('B');
}
else if(score>=50 && score<=59){
    console.log('C');
}
else if(score>=40 && score<=49){
    console.log('D');
}
else if(score<=39){
    console.log('Fail');
}
else{
    console.log('Not Found');
}

