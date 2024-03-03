// For a given array of numbers, print the square of each value using the forEach loop.

let arr = [1,2,3,4,5,6,7,8,9,10];
// using arrow function
arr.forEach((val) => {
    console.log(val*val);
});

// using function
arr.forEach(function print_squares(val){
    console.log(val*val);
});

// or another way

let calcSquare = (val) => {
    console.log(val*val);
}

arr.forEach(calcSquare);

console.log(arr);