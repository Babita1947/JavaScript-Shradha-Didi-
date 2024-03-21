// -------------selecting with id ------------------

// let heading = document.getElementById("heading1");
// console.dir(heading);


// --------------selecting with class-------------

// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// let id = document.getElementById("heading");//not exits heading id
// let myClass = document.getElementsByClassName("heading");//not exits class heading
// console.dir(id); //null
// console.dir(myClass); //HTMLCollection(0)

// let myId = document.getElementById("myId");
// console.dir(myId);


// ------------------selecting with tag -------------
// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);


// --------------querySelector()---------------
let firstEl = document.querySelector("p");//1st element
console.dir(firstEl);

let allEl = document.querySelectorAll("p");// all elements
console.dir(allEl);

let myClass = document.querySelector(".myClass");
console.dir(myClass);

let myId = document.querySelector("#myId");
console.dir(myId);