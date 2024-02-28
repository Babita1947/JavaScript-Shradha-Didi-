// Q_1. For a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class.

let marks = [85,97,44,37,76,60];
let avg;
let sum=0;
for(let i=0;i<marks.length;i++){
    sum = sum + marks[i];
}

avg = sum / marks.length;
console.log(`Average marks of the entire class ${avg}`); //using template literals
