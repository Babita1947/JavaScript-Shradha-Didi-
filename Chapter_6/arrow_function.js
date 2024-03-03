// Arrow function = compact way of writing a function.
// const arrowSum = (a, b) => {
//     console.log("Sum = ",a+b);
// };
// arrowSum(45,100);

// const arrowDiff = (a, b) => {
//     console.log("Diff = ",a-b);
// };
// arrowDiff(34,90);

// const arrowMul = (a, b) => {
//     console.log("Mul = ",a*b);
// };
// arrowMul(45,10);

// const arrowDiv = (a, b) => {
//     console.log("Div = ",a/b);
// };
// arrowDiv(45,9);


// if return then
const arrowSum = (a, b) => {
    return a+b;
};
let sum = arrowSum(45,100);

const arrowDiff = (a, b) => {
    return a-b;
};
let diff = arrowDiff(34,90);

const arrowMul = (a, b) => {
    return a*b;
};
let mul = arrowMul(45,10);

const arrowDiv = (a, b) => {
    return a/b;
};
let div = arrowDiv(45,9);

const printResult = (result) => {
    console.log("Result = ",result);
};
printResult(sum);
printResult(diff);
printResult(mul);
printResult(div);
