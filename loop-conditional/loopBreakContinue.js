// 1. Run a  for loop from 30 to 86. This loop will stop if the values get highest than 44
var lowerBound = 30;
var upperBound = 86;
console.log(" ");
console.log("Break a loop at specific value.")
for(var i = lowerBound; i <= upperBound; i++){
    if(i > 44){
        break;
    }
    else{
        console.log(i);
    }
}
console.log(" ");


// 2. Write the price of the books you have. Declare an array with the prices and display the prices if they are lower than 200. 

var booksPrice = [120, 150, 465, 375, 200, 110, 125, 200, 470, 155, 190, 900];
var sum = 0;
console.log(" ");
console.log("Continue a loop at specific value.")
console.log("Total number of books: ", booksPrice.length);
for(var i = 0; i < booksPrice.length; i++){
if(booksPrice[i] > 200){
    continue;
}
else{
    console.log(booksPrice[i]);
}
sum++;
}
console.log("Except books with price 200 taka, the number of books is: ", sum);
console.log(" ");
