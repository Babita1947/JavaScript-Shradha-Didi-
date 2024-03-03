let arr = [1, 2, 3, 4];
const output = arr.reduce((res, curr) => {
  return res + curr;
});

console.log(output);

let nums = [5, 6, 2, 1, 3];
const largest = nums.reduce((res, curr) => {
  return res > curr ? res : curr;
});
console.log(largest);
