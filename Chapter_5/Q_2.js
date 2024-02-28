//Q_2. For a given array with prices of 5 items -> [250,645,300,900,50].All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

//let prices = [250,645,300,900,50];

// for(let i=0;i<prices.length;i++){
//      prices[i] = prices[i] - (prices[i]*10)/100;
// }

// console.log(prices);

// ----- using for of loop -----
let items = [250,645,300,900,50];
let i = 0;
let avg;
for(let val of items){
    console.log(`Value at index ${i}  = ${val}`);
    let offer = (val*10)/100;
    items[i] = items[i] - offer;
    i++;

}

console.log(`newItems = ${items}`);