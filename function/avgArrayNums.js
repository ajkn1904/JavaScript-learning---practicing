/* Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */

function make_avg(){
   var arr = [12, 23, 9, 10, 18, 32, 24, 8];
   const length = arr.length;
   console.log("Length of the array is: ", length);
   
   var sum = 0;
   for(var i = 0; i < length; i++){
        sum = sum + arr[i];
    }
    console.log("Sum is: ", sum);
    
    let avg = sum / length;
    return avg;
}
console.log();
const returnedValue = make_avg();
const average = parseFloat(returnedValue.toFixed(2));
console.log("The average value of the array elements is: ", average);
console.log();