// Strings
// let str1="Apna College";
// let str2='Asansol Engineering College';
// console.log(str1.length);
// console.log(str2.length);
// console.log(str1[1]);

//Template Literals
// let specialString = `This is a template literal`; //`` -> backtack
// console.log(typeof(specialString)); 

// Why we use Template Literals
let obj = {
    item: "pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("the cost of",obj.item,"is",obj.price,"rupees");
let specialString = `This is a template literal ${1+2+3}`;
console.log(specialString);