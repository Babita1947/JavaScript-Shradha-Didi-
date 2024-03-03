// function abc(){
//     console.log("Hello");
// }

// function myFunc(abc){
//     return abc;
// }

// let ans = abc();
// console.log(ans);

let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

// using arrow function
// arr.forEach((val) => {
//     console.log(val);
// })

let num = [5,10,15,20,25,30];
// //using for each loop
// num.forEach(function displayNum(val){
//     console.log(val);
// });

// //using arrow function 
// num.forEach((val) => {
//     console.log(val);
// });


// find sum of given array
let nums = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

nums.forEach((val) => {
    sum = sum + val;
});

console.log("Sum = ",sum);


let str = ["Mumbai","Pune","Delhi","Asansol"];
str.forEach((val,idx,str) => {
    console.log(val.toUpperCase(),idx,str);
})

str.forEach((val,idx) => {
    console.log(val,idx);
})


