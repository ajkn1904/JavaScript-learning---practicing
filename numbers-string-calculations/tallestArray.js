/* Tom and his friendsa are perticipating in the "Who is the tallest?" compitition. As per the name, the person with the height height will be the winner.  Can you find who is the tallest among Tom and all of his friends?
Input: The input line has can have multiple integer values, xi(The height of i^th friend in cm).

Sample Input-1:         Sample Input-2:
157  134  188           167   190   120   165   137

Output:                 Output:
188                     190  
*/

function tallest(nums){
let tall = nums[0];
for(let i = 0; i < nums.length; i++){
    if(nums[i] > tall){
        tall = nums[i];
    }
}
return tall;
}

let arr = [157, 134, 188];
console.log();
console.log(tallest(arr));
console.log();

let arr2 = [167, 190, 120, 165, 137]
console.log();
console.log(tallest(arr2));
console.log();