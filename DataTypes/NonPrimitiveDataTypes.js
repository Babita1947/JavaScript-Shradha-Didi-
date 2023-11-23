// Object (Non-Primitive Data Type)
const student = {
    fullName: "Babita Kumari",
    age: 20 ,
    cgpa: 9.1 ,
    isPass: true
}

console.log(student);
console.log(typeof(student));
console.log(student["fullName"]); // access key
// console.log(student.fullName); 
console.log(student.age);  // access key
console.log(student.cgpa); // access key
console.log(student["isPass"]); // access key

student.age=student.age+1;
// student["age"]=student["age"]+1;
console.log(student.age);

student["fullName"]="Nilam Yadav";
console.log(student["fullName"]);