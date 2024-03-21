let bodyId = document.querySelector("body");
console.dir(bodyId.firstChild);//#text
console.dir(bodyId.lastChild);//script

let divId = document.querySelector("div");
console.dir(divId.firstChild);//#text
console.dir(divId.lastChild);//#text
console.dir(divId.children);//HTMLCollection(3)