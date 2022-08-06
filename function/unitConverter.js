/*1.Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.*/

function unitConv(value){
    const min = value * 60;
    return min;
}

const hr = 1;
console.log();
const result = console.log(hr, "hour is:", unitConv(hr), "minutes");
console.log();


/* 2. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।
 */

function unitConv2(value2){
    const sec = value2 * 60 * 60;
    return sec;
}

const hr2 = 4;
console.log();
const result2 = console.log(hr2, "hour is:", unitConv2(hr2), "seconds");
console.log();