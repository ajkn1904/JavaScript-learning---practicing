//একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।


function small(a, b, c){
    console.log(a, b, c);
    let smallest = Math.min(a, b, c);
    return smallest;
}

var num1 = 67;
var num2 = 350;
var num3 = 98;

console.log();
const result = console.log("The smallest value is:", small(num1, num2, num3));
console.log();