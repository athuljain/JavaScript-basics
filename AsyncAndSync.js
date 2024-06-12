// console.log("Start");

// // Simulating a blocking operation

// for (let i = 0; i < 1000; i++) {
//   console.log(i)
// }

// console.log("End");



// console.log("Start");

// setTimeout(() => {
//   for (let i = 0; i < 100; i++) {
//   console.log(i)
// }

//   console.log("Async operation completed");
// }, 1000); 

// console.log("End");



// Function to be executed
// function sayHello() {
//     console.log("Hello, world!");
// }

// // Call the function every 2 seconds (2000 milliseconds)
// let intervalId = setInterval(sayHello, 1000);

// // To stop the interval after 10 seconds (10000 milliseconds)
// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval cleared.");
// }, 10000);




// const myPromise = new Promise((res, reject) => {
//   // Simulate an asynchronous operation
//   setTimeout(() => {
//     const success = true; // Change to false to simulate failure
//     if (success) {
//       res("Operation succeeded!");
//     } else {
//       reject("Operation failed.");
//     }
//   }, 2000);
// });


// myPromise
//   .then((result) => {
//     console.log(result); // "Operation succeeded!"
//   })
//   .catch((error) => {
//     console.error(error); // "Operation failed."
//   })
//   .finally(() => {
//     console.log("Operation completed."); // Runs regardless of success or failure
//   });



// const promise1 = Promise.resolve("Promise 1");
// const promise2 = Promise.resolve("Promise 2");
// const promise3 = Promise.resolve("Promise 3");

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results); // ["Promise 1", "Promise 2", "Promise 3"]
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "First"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 200, "Second"));

// Promise.race([promise1, promise2])
//   .then((result) => {
//     console.log(result); 
//   });





// const promise1 = Promise.resolve("Resolved");
// const promise2 = Promise.reject("Rejected");

// Promise.allSettled([promise1, promise2])
//   .then((results) => {
//     console.log(results);
   
//   });






// const promise1 = Promise.reject("Error 1");
// const promise2 = Promise.resolve("Success");
// const promise3 = Promise.reject("Error 2");


// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result); // 
//   })
//   .catch((error) => {
//     console.error(error); // AggregateError if all promises are rejected
//   });


