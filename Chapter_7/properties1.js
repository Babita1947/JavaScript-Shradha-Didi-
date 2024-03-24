//-----------getAttribute(attr)----------- // to get the attribute value

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

//-------------setAttribute(attr,value)---------// to set attribute val th

// let para = document.querySelector("p");
// // set 
// console.log(para.setAttribute("class","newClass"));


//----------------style------------------

// //get style

// let div = document.querySelector("div");
// console.log(div.style);

// //set style
// div.style.backgroundColor =  "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";


// //change value of div
// div.innerText = "Hello";

// // to vanish the div from the console or browser 
// div.style.visibility = "hidden";


// ************ Insert Elements *******************
// let el = document.createElement("div");
// ** 1. node.append(el) //adds at the end of node(inside)
// ** 2. node.prepend(el) //adds at the start of node(inside)
// ** 3. node.before(el) //adds before the node (outside)
// ** 4. node.after(el) //adds after the node (outside)

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

// to show on screen 
let div = document.querySelector("div");
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);

let p = document.querySelector("p");
p.after(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";
document.querySelector("body").prepend(newHeading);

// delete paragraph
let para = document.querySelector("p");
para.remove();
newHeading.remove();
