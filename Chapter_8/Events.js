// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a = 35;
//     a++;
//     console.log(a);//26
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };

// if we use same thing more than one then

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () =>{
//     console.log("HANDLER1");
//     let a = 35;
//     a++;
//     console.log(a);//26
// };

// btn1.onclick = () => {
//     console.log("HANDLER2");
// };

// Event Object

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX, e.clientY);
// };

// let div = document.querySelector("div");

// div.onmouseover = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.type);
    // console.log(e.clientX, e.clientY);
// };

// Event Listeners

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });


let btn1 = document.querySelector("#btn1");

// addEventListener(event,callback)

// btn1.addEventListener("click", (e) => {
//     console.log("button1 was clicked");
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX, e.clientY);
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });

// removeEventListener(event,callback)

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});

const handler3 = () => {
    console.log("button1 was clicked - handler3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});
 
btn1.removeEventListener("click", handler3);









