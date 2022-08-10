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


/* 3. The standerd heighty of vollyball players is 7 feet. Jim wants to join the vollyball team, so he decided to measure his height to see if he meets the standerd. Calculate his height in feet. [1 feet = 12 inch]
Sample input: 84
Output: 7 */

function inchToFeet(num){
    let feet = num / 12;
    return feet;
}

let inch = 84;
console.log();
console.log(inch, 'inch', '=', inchToFeet(inch), 'feet');
console.log();



/* 4. Write a function called centimeterToMeter() take centimeter as the input parameter and will it into meter and will return the result in meter. [1m = 100cm] */

function centimeterToMeter(num){
    let meter = num / 100;
    return meter;
}

let centimeter = 856;
console.log();
console.log(centimeter, 'centimeter', '=', centimeterToMeter(centimeter), 'meter');
console.log();


/* 5. Problem:1  radianToDegree
Write a function called radianToDegree that will take radian as perameter and retun the degree of that value. And return only 2 digit after decimal. */ 

// Problem:1
function radianToDegree(radian){
    //checking if the input is valid
   if(typeof radian === 'number'){
        let degree = parseFloat(((radian * 57.2958).toFixed(2)));
        //using parseFloat() to convert string to number. And toFixed() to limited the numbers after decimal.
        return degree;
    }
    else{
        return 'Please enter a number!'
    }
}
let radian = 199;
result = console.log(radianToDegree(radian)); 
