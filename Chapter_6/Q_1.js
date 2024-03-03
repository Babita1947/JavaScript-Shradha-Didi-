// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

function countVowels(str) {
  let cnt = 0;
  let size = str.length;
  for (let i = 0; i < size; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    )
      cnt += 1;
  }
  return cnt;
}
let cnt = countVowels("babita kumari");
console.log("Vowels present = ", cnt);

// Create an arrow function to perform the same task.
let cntVowels = (str) => {
  let size = str.length;
  let cnt = 0;
  for (let i = 0; i < size; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    )
      cnt++;
  }
  return cnt;
};
let count = cntVowels("nilam yadav");
console.log("Vowels present = ", count);
