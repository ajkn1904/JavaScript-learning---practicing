/*  কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। */


const arr = [15, 7, 65, 43, 27, 98, 5, 18];
const sortedArr = [];

for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j <= arr.length; j++){
        
        if(arr[i] > arr[j]){
            swap = arr[i];
            arr[i] = arr[j];
            arr [j] = swap;
            
        }
        
        } sortedArr.push(arr[i]);  
        
}

console.log("The array in ascending order", sortedArr);
console.log();
console.log("The second largest element is:", sortedArr[sortedArr.length - 2]);
console.log();