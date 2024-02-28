// Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a. Remove the first company from the array
// b. Remove uber & Add Ola in its place
// c. Add Amazon at the end

// a. Remove the first company from the array
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(`First removed company = ${companies.shift()}`);
// console.log(`After remove first company from the array = ${companies}`);

// b. Remove uber & Add Ola in its place
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(2,1,"Ola");
// console.log(companies);

//c. Add Amazon at the end
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.push("Amazon");
console.log(companies);