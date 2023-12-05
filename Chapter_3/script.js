//1. Print 1 to 5
// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// console.log(i);

//2. If we use var data type
// for(var i=1;i<=5;i++){
//     console.log("i = ",i);
// }
// console.log(i);

//3. Calculate sum of 1 to 5
// let sum = 0;
// for(let i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log("Sum = ",sum);
// console.log("Loop has ended");


// WHILE LOOP
// let i=1;
// while(i<=5)
// {
//     console.log("i = ",i);
//     i++;
// }


// do while loop
// let i=1;
// do{
//    console.log("i = ",i);
//    i++;
// }while(i>=5)

// for-of loop
// let str="ApnaCollege";
// let size=0;
// for(let i of str){
//     console.log("i = ",i);
//     size++;
// }
// console.log("String size = ",size);

// for-in loop
let Student = {
    name:"Babita Kumari",
    roll: "10800122019",
    age: 21,
    cgpa: 9.1,
    isPass: true,
};

for(let key in Student){
    console.log("key = ",key, " value = ",Student[key]);
}

