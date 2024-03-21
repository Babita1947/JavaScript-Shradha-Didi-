//---------------tagName------------

// let div = document.querySelector("div");
// console.dir(div);
// console.dir(div.tagName);//DIV

// let h1 = document.querySelector("h1");
// console.log(h1);
// console.log(h1.tagName);//H1


// ------------innerText-----------------
// let div = document.querySelector("div");
// console.dir(div);//div
// console.dir(div.innerText);
// console.dir(div.innerHTML);

// --------------set value--------------
// let div = document.querySelector("div");
// div.innerText = "abcd";
// console.dir(div.innerText); //abcd

// div.innerHTML = "<div>inner div</div>";
// console.dir(div.innerHTML);//<div>inner div</div>


// let heading = document.querySelector("h1");
// console.dir(heading);//h1
// console.log(heading);//<h1>New Heading</h1>
// heading.innerText = "New Heading";
// console.dir(heading.innerText);//New Heading
// heading.innerHTML = "<i>New Heading</i>";
// console.dir(heading.innerHTML);


//----------textContent------------

let heading = document.querySelector("h1");
console.dir(heading);
console.log(heading);
console.log(heading.innerText);//not visible using innerText
console.log(heading.textContent);// Old Heading