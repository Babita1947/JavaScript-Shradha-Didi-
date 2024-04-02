// Direct way of creating object;

// const student = {
//     fullName : "Babita Kumari",
//     marks : 94.4,
//     printMarks: function() {
//         console.log("Marks =",this.marks);//student.marks
//     },
// }

// const employee = {
//     //both way is correct but generally first one way is used in programming in the object.
//     calcTax1() {
//         console.log("Tax rate is 10%");
//     },
//     // calctax2 : function(){
//     //     console.log("Tax rate is 10%");
//     // }
// };

// const karanArjun1 = {
//     salary: 5000,
// };

// const karanArjun2 = {
//     salary: 5000,
// };
// const karanArjun3 = {
//     salary: 5000,
// };
// const karanArjun4 = {
//     salary: 5000,
// };

// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;


const employee = {
    calcTax1() {
        console.log("Tax rate is 10%");
    },
};

const karanArjun1 = {
    salary: 5000,
};

karanArjun1.__proto__ = employee;


