//Q_1. Create a H2 heading element with text-"Hello JavaScript". Append "from Apna College students" to this text using JS. 

// let h2 = document.querySelector("h2");
// console.dir(h2);
// h2.innerText = h2.innerText + " from Apna College student ";//concatenate
// console.log(h2.innerText);


//Q_2. Create 3 divs with common class name - "box" . Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
let idx = 1;
let div;
for(div of divs){
    // console.log(div);
    // console.log(div.innerText);
    div.innerText = `new unique value ${idx}`;
    idx++;
}
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";
