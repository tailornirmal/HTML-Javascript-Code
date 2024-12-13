console.log("this is core js project");

// Promise Basic Syntax

// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("[4,6,34,6]"), 1000); // Wait for 1 Mili Second
// })
// .finally(() => console.log("finally"))
// .then(
//     result => console.log(result),
//     error => console.log(error)
// );


// Load any script using Promise

// function loadScript(src) {
//     return new Promise(function(resolve,reject) {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`Script load error for ${src}`));
//         document.head.append(script);
//     });
// }

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(script => console.log(`${script.src} loaded`), error => console.log(`Error ${error.message}`));

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       reject(new Error("error"));
//     }, 1000);
//   }).catch(error => console.log(error));