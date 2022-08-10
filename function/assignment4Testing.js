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



// Problem:2
function isJavaScriptFile(stringValue){
    //checking if the input is valid
    if(typeof stringValue === 'string'){
        if(stringValue.endsWith('.js')){
            //using endsWith() to check if the input fulfills the requirment 
        return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Please enter a string!'
    }

}



// Problem:3
function oilPrice(dieselAmount, petrolAmount, octaneAmount){
    //checking if the input is valid
    if(typeof dieselAmount === 'number' && typeof petrolAmount === 'number' && typeof octaneAmount === 'number'){
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;

        //calculating payable per material type
        let dieselTotalPayable = dieselPrice * dieselAmount;
        let petrolTotalPayable = petrolPrice * petrolAmount;
        let octaneTotalPayable = octanePrice * octaneAmount;
        
        //calculating total payable
        const totalPrice = dieselTotalPayable + petrolTotalPayable + octaneTotalPayable;

        return totalPrice;
    }
    else{
        return 'Please enter valid inputs!'
    }
}



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



// Problem:5
function isBestFriend(object1, object2){
    //checking if the input is valid
    if(typeof object1 === 'object' && typeof object2 === 'object'){
        //matching the values of two objects if they fulfill the requirment    
        if(object1.name == object2.friend && object1.friend == object2.name){
            return true;
        }
        return false;
    }
    else{
        return 'Please enter an object!'
    }
}
