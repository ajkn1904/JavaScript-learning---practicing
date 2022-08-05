/* একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।  */

function timeTable(num){
    for(let i = 1; i <= 10; i++){
        const result = num * i;
        console.log(num, " * ", i, " = ", result);
    }
}

const num = 13;
console.log();
timeTable(num);
console.log();