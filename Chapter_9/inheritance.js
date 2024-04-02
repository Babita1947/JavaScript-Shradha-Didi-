// class Parent{
//     hello(){
//         console.log("Hello");
//     }
// }

// class Child extends Parent {

// }

// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person{
//     work(){  // method overriding
//         console.log("solve problems, build something");
//     }
// }
// class Doctor extends Person{
//     work(){ // method overriding
//         console.log("Treat patients");
//     }
// }

// let p1 = new Person();
// console.log(p1);
// let e1 = new Engineer();
// console.log(e1);

//-----------Super Keywords-----------

// class Person{
//     constructor(){
//         console.log("Enter parent constructor");
//         this.species = "homo sapiens";
//         console.log("Exit parent constructor");
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(branch){
//         console.log("Enter child constructor");
//         super(); // to invoke parent class constructor
//         this.branch = branch;
//         console.log("Exit child constructor");
//     }
//     work(){  
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("chemical engg");

class Person{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name); // to invoke parent class constructor
    }
    work(){  
        super.eat();
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer("Babita");
console.log(engObj);

