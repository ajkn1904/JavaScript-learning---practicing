/* একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। */

function arrAvg(){
    let a = [65, 9, 22, 79, 49, 23, 12, 87];
    let len = a.length;
    console.log("Length of the array is:", len);

    
    let sum = 0;
    for(let i = 0; i < len; i++){
        sum = sum + a[i];
     }
    console.log("Sum of the array elements is:", sum);
    let avg = sum / len;
    return avg;
}

console.log();
console.log("Average is:", arrAvg());
console.log();