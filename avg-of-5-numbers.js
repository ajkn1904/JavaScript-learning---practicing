/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla of a student.
input: The first line of the input is the marks of the five subjects mentioned above, respectively.
sample input:
75.25,65,80,35.45,99.50
output:
71.04*/

var math = 75.25 
var bio = 65
var chm = 80
var phy = 35.45
var bng = 99.50

var numOfSub = 5

var avg = ((math + bio + chm + phy + bng) / numOfSub)
avg = avg.toFixed(2)
console.log(avg)
avg = parseInt(avg)
console.log(avg)
