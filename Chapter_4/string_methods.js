//----str.toUpperCase()  && str.toLowerCase()--------

// let str = "Apna College";
// let newStr = str.toUpperCase();
// console.log(newStr);
// let new1Str = str.toLowerCase();
// console.log(new1Str);

//----str.trim()----

// let str1 = "   Apna College JS     ";
// console.log(str1.trim());

//---- str.slice(start,end?)----//returns part of string

// let str2 = "01234567";
// console.log(str2.slice(1,6));
// console.log(str2.slice());
// console.log(str2.slice(2));

// let characters = "hello";
// console.log(characters.slice(0,4));

// str1.concat(str2) // joins str2 with str1
// let str1 = "apna";
// let str2 = "college";

// let res = str1.concat(str2);
// let res1 = str2.concat(str1);
// let res2 = str1 + str2;
// console.log(res);
// console.log(res1);
// console.log(res2);

// let s1 = "Shradha";
// let s2 = " Didi";
// console.log("I am learning JavaSrcipt from "+s1+s2);

// let s3 = "Hello " + "World " + 2024
// console.log(s3);


//-------str.replace(searchVal,newVal)-------

// let str = "Babita Kumari";
// console.log(str.replace("Kumari","Yadav"));

// let str1 = "hellololo";
// console.log(str1.replaceAll("lo","p"));

//------str.charAt(idx)-------
let char = "Rampravesh Yadav";
console.log(char.charAt(3)); //p
console.log(char.charAt(5)); //a
char[3] = "P";
console.log(char);// not change 'P' insteed of 'p' because string is immutable

char = char.replace("p","P");
console.log(char); // now it changes and changing value is assigned in the same variable i.e char