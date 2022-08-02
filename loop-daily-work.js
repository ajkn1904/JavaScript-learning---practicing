/* প্রতিদিন তোমার কাজ কি? 
১) রাত ৮ টা বাজে মডিউল আনলক করো  
২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো
৩) ভিডিও দেখতে দেখতে নোটস নাও 
৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 
৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 
প্রাকটিস চ্যালেঞ্জ-১: এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। 
প্রাকটিস চ্যালেঞ্জ-২: আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো। 
প্রাকটিস চ্যালেঞ্জ-৩: উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 
প্রাকটিস চ্যালেঞ্জ-৪: উপরের প্রব্লেমটাই for লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 
 */

var arr = ['unlock module at 8 pm', 'watch vedio and practice', 'take notes', 'self practice', 'in case of not getting the lecturs join support session']

//প্রাকটিস চ্যালেঞ্জ-১:
console.log('with For Loop');
for(var i = 0; i < 2; i++){
    for(var j = 0; j < arr.length; j++){
    console.log(j + ". " + arr[j]);
    }
}
console.log(' ');
console.log(' ');

 
//প্রাকটিস চ্যালেঞ্জ-২:
console.log('with While Loop');
var i = 0;
while(i < 2){
    var j = 0;
    while(j < arr.length){
    console.log(j + ". " + arr[j]);  
    j++;}
i++;
}
console.log(' ');
console.log(' ');


//প্রাকটিস চ্যালেঞ্জ-৩:
console.log('with For Loop Reverse');
var arrLength = arr.length-1;
for(var j = 1; j >= 0; j--){
    for(var i = arrLength; i >= 0; i--){
        console.log(i + ". " + arr[i]);
        }
    }
    console.log(' ');
    console.log(' ');


//প্রাকটিস চ্যালেঞ্জ-৪:
console.log('with While Loop Reverse');
var j = 1;
while(j >= 0){
    var arrLength = arr.length-1;
    var i = arrLength;
    while(i >= 0){
            console.log(i + ". " + arr[i]);
            i--;
        }
        j--;
    }
    console.log(' ');