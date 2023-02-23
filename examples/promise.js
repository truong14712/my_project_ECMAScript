// const asyncTask = function (text, status) {
//   const rand = Math.random() * (3000 - 500) + 500;
//   // Asynchronous function
//   return new Promise(function (resolve, reject) {
//     // Async
//     setTimeout(function () {
//       if (status) {
//         resolve(`${text} - ${Math.round(rand)}ms`);
//       } else {
//         reject(`${text} got error`);
//       }
//     }, rand);
//   });
// };

// Consumer
// asyncTask("task1", true)
//   .then(function (response) {
//     console.log(response);
//     return asyncTask("task2", false);
//   })
//   .then(function (response) {
//     console.log(response);
//     return asyncTask("task3");
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// // class
// // Producer
// const promise = new Promise(function (resolve, reject) {
//   // resolve - Hoàn thành
//   // reject - Thất bại
//   setTimeout(function () {
//     resolve("Hoàn thành");
//   }, 3000);
// });

// console.log(promise);
// Consumer
// promise.then(function (response) {
//   console.log(response);
// });
// window.promise = promise;

// fetch;
const data = fetch("http://localhost:3000/book"); //Producer

// Consumer
data
  .then(function (response) {
    // console.log(response);
    // return response.json();
  })
  .then(function (data) {
    // console.log(data);
  });

// async await
const async1 = async () => {
  const data1 = await (await fetch("http://localhost:3000/book")).json();
  console.log(data1);
  const data3 = await fetch("http://localhost:3000/book");
  const data2 = await data3.json();
  console.log(data2);
};
async1();
