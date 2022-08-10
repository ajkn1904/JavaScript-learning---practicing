// 1. Declare an array for all the topics (programming languages) you have learned. Display them by using for loop.

var learnedTopics = ['html', 'css', 'bootstrap', 'tailwind', 'c', 'java', 'python']
console.log(" ");
console.log("I have learned:")
for(var i = 0; i < learnedTopics.length; i++){
    console.log((i + 1), ". ", learnedTopics[i]);
}
console.log(" ");


// 2. Declare an array for all the mobile phone's model you have used. Display them by using while loop.

var usedMobile = ['nokia', 'symphony', 'walton', 'samsung', 'xiaomi'];
console.log(" ");
console.log("I have used: ");
var i = 0;
while(i < usedMobile.length){
    console.log((i + 1), ". ", usedMobile[i]);
    i++;
}
console.log(" ");
