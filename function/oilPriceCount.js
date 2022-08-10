/*
Problem 3: oilPrice

write a function called oilPrice which will take 3 perameters. 

1 L diesel – 114 taka

1 L petrol – 130 taka 

1 L octane – 135 taka 

Now find the total price for multiple leter amount of diesel, petrol and octane and return*/ 

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

let diesel = 0;
let petrol = 2;
let octane = 3;
result = console.log(oilPrice(diesel, petrol, octane));