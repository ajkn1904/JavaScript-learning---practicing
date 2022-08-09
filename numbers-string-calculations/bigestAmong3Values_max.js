/* This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

Input: The input line has two values, x(The marks Jim has got), y(The marks Dela has got) and z(The marks Chinku has got).

Sample Input-1:         Sample Input-2:
84  75  77              69   97   99

Output:                 Output:
Dela                    Chinku  */


//Type 1:
//----------------------

function bigest(a, b, c){
let maxNum = Math.max(a, b, c);
    if(maxNum == a){
        console.log("Jim")
    }
    else if(maxNum == b){
        console.log("Dela")  
    }
    else{
        console.log("Chinku")  
    }
    return maxNum;
}
    
    let x = 69;
    let y = 97;
    let z = 99;
    
    console.log();
    console.log(bigest(x, y, z));
    console.log();



//Type 2:
//----------------------

function bigest1(a, b, c){   
    if(a > b && a > c){
        console.log("Jim")
    }
    else if(b > a && b > c){
        console.log("Dela")  
    }
    else{
        console.log("Chinku")  
    }
}
    
let x1 = 84;
let y1 = 75;
let z1 = 77;
    
console.log();
bigest1(x1, y1, z1);
console.log();