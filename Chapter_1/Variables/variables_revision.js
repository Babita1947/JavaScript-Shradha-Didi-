// Non-Primitive Data Type: Object

const Student = {
    fullName : "BABITA KUMARI",
    age : 20,
    cgpa : 9.1,
    isPass : true
};
let x = "fullName";
console.log(Student);
console.log(typeof(Student));
console.log(Student.fullName);
console.log(Student[x]);
Student.age += 1;
console.log(Student.age);