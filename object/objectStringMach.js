/* Problem 5: isBestFriend


Write a fuction called isBestFriend which will take two objects as perameter. Now match the object and find out if they are friends then true otherwise false.*/

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

let obj1 = {name:"abul", friend:"kabul"}
let obj2 = {name:"kabul", friend:"abul"}

result = console.log(isBestFriend(obj1, obj2)); 
