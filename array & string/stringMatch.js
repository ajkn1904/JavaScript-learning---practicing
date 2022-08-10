/* Problem:2  isJavaScriptFile 

Write a function called isJavaScriptFile() and take a (String) as perameter which will be the name of a file (for example: ‘index.js’). If it is a JS file return true otherwise false. */

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

let fileName = 'js.png.js';
result = console.log(isJavaScriptFile(fileName));