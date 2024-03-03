let arr = [1,2,3,4,5,6,7,];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

let oddArr = arr.filter((val) => {
    return val % 2 !== 0;
});

console.log(oddArr);

let greateThanThree = arr.filter((val) => {
    return val > 3;
});
console.log(greateThanThree);