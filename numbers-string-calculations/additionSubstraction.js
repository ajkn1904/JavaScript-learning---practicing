/* Harry's mpm gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.
input: The first line of the input is taka Harry's mom gave him. The second line is the cost of 1kg of oranges and apples.
sample input:
1000
700
output:
300 */

var takaFromMom = 1000
var applePrice = 300
var orangePrice = 400

var expanse = (applePrice + orangePrice)

var returnTaka = (takaFromMom - expanse)

console.log(returnTaka)
