/* 1. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে। */
 

function leapYear(num){
    if(num % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const year = 2023;
console.log();
var result = console.log("The year", year, "is  leap year.", leapYear(year));
console.log();


/* 2. Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and prinvar result. */

function findLeapYear(years){
    const learYr = [];
    for(var i = 0; i < years.length; i++){
        if(years[i] % 4 === 0){
            learYr.push(years[i]);
    }
}
return learYr;
}


const array = [2023,2024,2025,2028,2030];
console.log();
var result = console.log("Tne new array with leap year is: ", findLeapYear(array));
console.log();