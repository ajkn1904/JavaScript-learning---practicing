/* Problem 4: publicBusFare


একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।  */

// Problem:4
function publicBusFare(number){
    //checking if the input is valid
    if(typeof number === 'number'){ 
            //checking if the number of members is more than or equal 50
        if(number >= 50){
            let busMember = number % 50;      //counting the number of members after fill up seat in bus/es.
            let microbusMember = busMember % 11;       //counting the number of members after fill up seat in bus/es and microbus/es.
            const rest = microbusMember;
            //calculating total bus fare for the rest members. 
            let ticketPrice = 250;
            const totalBusFare = ticketPrice * rest;
            return totalBusFare;
        }
        //checking if the number of members is more than  or equal 11
        else if(number >= 11){
            let microbusMember = number % 11;        //counting the number of members after fill up seat in microbus/es.
            let rest = microbusMember;
            //calculating total bus fare for the rest members.
            const ticketPrice = 250;
            const totalBusFare = ticketPrice * rest;
            return totalBusFare;
        }
        else{
            //checking if the number of members is less than  11 and calculating total bus fare for the members.
            const ticketPrice = 250;
            const totalBusFare = ticketPrice * number;
            return totalBusFare;
        }
    }
    else{
        return 'Please enter a number!'
    }

}

let members = 112;
result = console.log(publicBusFare(members));
