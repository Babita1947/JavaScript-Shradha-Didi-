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

// *************create promises ***************

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           // console.log("data", dataId);
//           // resolve("success");
//           reject("error");
//           if(getNextData){
//             getNextData();
//           }
//         }, 5000);
//     });
// }

// ************* How to use promises *************
//************* .then() & .catch() *********************

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("error");
//   });
// };

// let promise = getPromise();
// promise.then( (res) => {
//   console.log("promise fulfilled",res);
// });

// promise.catch((err)=>{
//    console.log("rejected",err);
// });

// ************ Promise chaining ***************

// function asyncFunc1(){
//   return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       console.log("data1");
//       resolve("success");
//     },4000);
//   });
// };

// function asyncFunc2(){
//   return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       console.log("data2");
//       resolve("success");
//     },4000);
//   });
// };

// console.log("Fetching data1....");
// asyncFunc1().then((res) => {
//   console.log("Fetching data2....");
//   asyncFunc2().then((res) => {});
// });

// EXAMPLE-2 (Promise Chaining)

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// // promise chain
// console.log("Getting data1 ....");
// getData(1)
//   .then((res) => {
//     console.log("Getting data2 ....");
//     return getData(2);
//   })
//   .then((res) => {
//     console.log("Getting data3 ....");
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// //callback hell
// //console.log("Getting data1 ....");
// // getData(1, () => {
// //     console.log("Getting data2 ....");
// //     getData(2,() => {
// //         console.log("Getting data3 ...");
// //         getData(3, () => {
// //             console.log("Getting data4 ...");
// //             getData(4);
// //         });
// //     });
// // });

// **************** Async Await ************
//Example_1
// async function hello(){
//   console.log("hello");
// }

//Example_2
// function api(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log("weather data");
//       resolve("200");
//       }, 2000);
//    });
// };

// async function getWeatherData(){
//   await api();//1st
//   await api();//2nd
// }

///Example_3

async function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// async function getAllData(){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("getting data5...");
//     await getData(5);
//     console.log("getting data6...");
//     await getData(6);
// }

// **** IIFE : Immediately Invoked Function Expression
// used when we want run asyn function without calling it
(async function (){
  console.log("getting data1...");
  await getData(1);
  console.log("getting data2...");
  await getData(2);
  console.log("getting data3...");
  await getData(3);
  console.log("getting data4...");
  await getData(4);
  console.log("getting data5...");
  await getData(5);
  console.log("getting data6...");
  await getData(6);
})();

