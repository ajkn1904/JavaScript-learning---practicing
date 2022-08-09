/* Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joined his class. She was also a topper at her previous school. On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim & Dela, whoever is the topper, will get the tasty cake." Can you find out who will get this cake? 

Input: The input line has two values, m(The marks Jim has got) and n(The marks Dela has got).

Sample Input-1:         Sample Input-2:
84  75                  69   97

Output:                 Output:
Jim                     Dela 
*/

function bigest(a, b){
let maxNum = Math.max(a,b);
if(maxNum == a){
    console.log("Jim")
}
else{
    console.log("Dela")  
}
return maxNum;
}

let m = 69;
let n = 97;

console.log();
console.log(bigest(m, n));
console.log();