function myFunction() // function definition
{
    console.log("Welcome to Apna College!");
    console.log("We are learning JS:");
}
myFunction(); //function call or invoke

function input(msg, n) // parameter->input
{
    console.log(msg,n);
}
input("I love JS", 100); //argument

// take something return nothing function
function sum(a, b){
   console.log("Sum = ",a+b);
}
sum(600,400);

// take something return something function
function multiply(a, b) //(a,b) --> local variable --> [ Block scopes]
{
    let mul = a*b;
    return mul;
}
let product = multiply(68,34);
console.log("Product = ",product);



