// let countVowels = (str) => {
//     let count = 0;
//     let size = str.length;
//     for(let i=0;i<size;i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// let ans;
// ans = countVowels("babita");
// console.log("Vowels = ",ans);

// let num = [5,10,15,20];

// console.log("Using function : ");
// num.forEach(function displayNum(val){
//     console.log(val);
// })

// console.log("Using arrow function : ");
// num.forEach((val) => {
//     console.log(val);
// })

// let num = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// console.log("Array elelments : ");
// num.forEach(function (val){
//     console.log(val);
//     sum = sum + val;
// })

// console.log("Sum = ",sum);

// let num = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// console.log("Array elelments : ");
// num.forEach((val) => {
//     console.log(val);
//     sum = sum + val;
// })

// console.log("Sum = ",sum);

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((val) => {
//     console.log(val*val);
// })

// let calc_square = (val) => {
//     console.log(val*val);
// }
// arr.forEach(calc_square);

let nums = [67,52,39];

nums.map((val) => {
    console.log(val);
});

// let newNums = nums.map((val) => {
//     return val;
// });
// console.log(newNums);

let newNums = nums.filter((val) => {
    return val%2 === 0;
});
console.log(newNums);
