//Q_1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, follow by their full name and ending with the fullname lenght.

let fullname = prompt("Enter your name");
let username = "@" + fullname.toUpperCase() + fullname.length;
console.log(username);