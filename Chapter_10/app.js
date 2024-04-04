// //synchronous
// console.log("one");
// console.log("Two");
// console.log("Three");



//Asynchronous
// console.log("one");
// console.log("Two");

// setTimeout(() => { //1s = 1000ms ===> 4s = 4000ms
//     console.log("hello");
// }, 4000); //timeout

// console.log("Three");
// console.log("Four");

//************** Callback hell *************/

// function getData(dataId, getNextData){
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// //callback hell
// getData(1, () => {
//     console.log("Getting data2 ....");
//     getData(2,() => {
//         console.log("Getting data3 ...");
//         getData(3, () => {
//             console.log("Getting data4 ...");
//             getData(4);
//         });
//     });
// });


// ********* Promises ************

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("Some error occured");
// });

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("data", dataId);
          resolve("success");
          if(getNextData){
            getNextData();
          }
        }, 5000);
    });
}




