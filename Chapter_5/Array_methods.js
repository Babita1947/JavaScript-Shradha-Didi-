//-----------push()-----------
// let foodItems = ["potato", "apple", "litchi", "tomato"];

// console.log(foodItems);
// foodItems.push("Mango","Banana","Guava");
// console.log(foodItems);

//-----------pop()------------
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// let deleteItem = foodItems.pop();
// console.log(foodItems);
// console.log(`Deleted item = ${deleteItem}`);

//------------toString()------------
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);

// let marks = [97,86,54,36];
// console.log(marks);
// console.log(marks.toString());

// --------Concat()-----------
// let marvelHeroes = ["thor","spiderman","ironman"];
// let dcHeroes = ["superman","batman"];
// let indianHeroes = ["shaktiman","krish"];

// let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroes);

//-----------unshift()----------[add to start]
// let marvelHeroes = ["thor","spiderman","ironman"];
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);

//-----------shift()------------[delete from start and return]
// let del = marvelHeroes.shift();
// console.log(`Delete = ${del}`);
// console.log(marvelHeroes);//after deletion from start;


//-----------------slice()---------------
// let marvelHeroes = ["thor","spiderman","ironman","antman","Dr. Strange"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));

//--------------splice()----------------
let arr = [1,2,3,4,5,6,7];
console.log(`Before splicing = ${arr}`);

arr.splice(1,6,11,21,31,41,51,61)
console.log(`After splicing = ${arr}`);

// Add element
arr.splice(2,0,101);
console.log(`After addition arr = ${arr}`);

// Delete element
arr.splice(3,1);
console.log(`After deletion arr = ${arr}`);

// Replace element
arr.splice(3,4,100,200,300,400);
console.log(`After replacement arr = ${arr}`);

arr.splice(4);//return from (4 to last index value) and delete that part from the original array
console.log(`arr = ${arr}`);

arr.splice();
console.log(`arr = ${arr}`);