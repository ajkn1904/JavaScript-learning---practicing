//১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।


var arr = [12, 32, 40, 9, 60, 97, 29, 17];


function getSmallest(nums){

    let small = nums[0];
    for( let i = 0; i < nums.length; i++){
        if(small > nums[i]){
            small = nums[i];
        }
    }
    return small;
}
console.log();
const result = console.log("The smallest value is:", getSmallest(arr));
console.log();




function getSmallest2(nums2){

  let small2 = nums2[nums2.length-1];
    for( let j = (nums2.length - 1); j >= 0; j--){
           if(small2 > nums2[j]){
            small2 = nums2[j];
        }
    }
    return small2; 
}
console.log();
const result2 = console.log("The smallest value in reverse way is:", getSmallest2(arr));
console.log();