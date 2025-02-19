// const obj = {
//   name: "Nirmal",
//   age: 34,
//   printName: function () {
//     return this.name + " " + this.age;
//   },
// };

// console.log(obj.printName());

// obj.prototype.myCall = function (callObj, ...params) {
//   if (typeof this !== "function") {
//     throw new Error(this + " is not a Function");
//   }
//   callObj.tempFunction = this;
//   const result = callObj.tempFunction(...params);
//   delete callObj.tempFunction;
//   return result;
// };

// console.log(obj);

// function run() {
//   console.log("Script start");
//   setTimeout(function () {
//     console.log("settimeout 1");
//   }, 1);
//   setTimeout(function () {
//     console.log("settimeout 0");
//   }, 0);
//   setTimeout(function () {
//     console.log("settimeout 2");
//   }, 10);
//   setTimeout(function () {
//     console.log("settimeout 3");
//   }, 5);
//   setTimeout(function () {
//     console.log("settimeout 4");
//   }, 12);

//   new Promise(function (resolve) {
//     resolve(console.log("its resolve"));
//   });
// }

// console.log(run());

// Promise.reject()
//   .then(
//     () => console.log(0),
//     () => console.log(1)
//   )
//   .finally(() => console.log(2))
//   .catch(() => console.log(3))
//   .then(() => console.log(4));

// const numbers = ["10", "10", "10"].map(parseInt);
// console.log(numbers);

// // javascript write function take array of integrager and return most frequent value in array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// function mostFrequent(arr) {}

// // flat this array with one loop only const arr1 = [1,2,3,4,[5,6,[7,8]],[9,10]]

// function flatArray(arr) {}

// console.log(flatArray([1, 2, 3, 4, [5, 6, [7, 8]], [9, 10]])); // [1,2,3,4,5,6,7,8,9,10]

// const trans = [
//   { category: "sports", amount: 50 },
//   { category: "sports", amount: 100 },
//   { category: "sports", amount: -20 },
//   { category: "travel", amount: 100 },
//   { category: "dinning", amount: 150 },
//   { category: "travel", amount: 120 },
// ];

// // write one code which will return output like its is retrun highest amount from particular category
// // [ {"sports":100}, {"travel":120}, {"dinning":150} ]

// console.log(Object.groupBy(trans, ({ category }) => category));

// function HighestByCategory(trans) {
//   let obj = {};
//   let result = [];
//   trans.forEach(({ category, amount }) => {
//     if (!obj[category] || obj[category] < amount) {
//       obj[category] = amount;
//     }
//   });
//   for (let key in obj) {
//     result.push({ [key]: obj[key] });
//   }
//   return result;
// }

// console.log(HighestByCategory(trans));

// const items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
// ];

// items.sort((a, b) => {
//   const first = a.name.toLowerCase();
//   const second = b.name.toLowerCase();
//   if (first < second) {
//     return -1;
//   }
//   if (first > second) {
//     return 1;
//   }
//   return 0;
// });

// console.log(items);

// const data = [6, 7, 3, 4, 5, 45, 47, 5, 5, 5];

// function callBackFn(element) {
//   return element + 1;
// }

// const result = data.map(callBackFn);
// console.log(result);

// const flatten = (arr) => {
//   const result = [];
//   arr.forEach((item) => {
//     console.log();
//     if (Object.prototype.toString.call(item) === "[object Array]") {
//       result.push(...flatten(item));
//     } else {
//       result.push(item);
//     }
//   });
//   return result;
// };

// // Usage
// const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
// console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // const arr = [5, 5, 41, 20, 10, 65, 95];

// const obj = arr.flatMap((e) => [e * e]);

// console.log(obj);

// function isSubset(arr1, arr2) {
//   return arr2.every((e) => arr1.includes(e));
// }

// // console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [55])); // true
// // console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// const arr1 = [[1, 2, 3, 4, 5, 6, 7], [55]];

// function checkIfExist(target, source) {
//   for (let i = 0; i < target.length; i++) {
//     if (target.includes(source[i])) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(checkIfExist([1, 2, 3, 4, 5, 6, 7], [4, 5]));

// const array = new Array("10");
// console.log(array);

// let rows = [];
// for (let i = 0; i < array.length; i++) {
//   console.log("hi");
//   rows.push("<div></div>");
// }

// const letters = ["a"];
// const alphaNumeric = letters.concat(1, [2, 3]);
// const flat = [5, 8, 7, [2, 5, [4, 1]]];
// // const arr = [].concat(5, 8, 7, [2, 5, [4, 1]]);
// console.log("hi", arr);

// for (let i in array) {
//   console.log("Hello");
// }

// // javascript write function getTotal which will return sum of all argment getTotal(2,3,4,5)(4,5,6);

// function getTotal(...args) {
//   console.log(args);

//   let sum = 0;

//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }

//   return function (...ar) {
//     for (let i = 0; i < ar.length; i++) {
//       sum += ar[i];
//     }
//     return sum;
//   };
// }

// // console.log(getTotal(2, 3, 4, 5)(4, 5, 6));

// function getData(number) {
//   var a = 0;
//   let b = 0;
//   const c = 0;
//   if (number > 5) {
//     var a = 1;
//     let b = 1;
//     const c = 1;
//   }
//   return [a, b, c];
// }

// console.log(getData(7)); // [1,0,0]

// // write a function accept a string return a function that return the string that was passed in
// function returnString(str) {
//   return function () {
//     return str;
//   };
// }

// // const input = [4, 3, 2, 7, 8, 2, 3, 1];
// const values = ["pencil", "pen", "sharpner", "pen", "pencil"];
// // const output = [{ pencil: 2 }, { pen: 2 }, { sharpner: 1 }];
// // // output > [2,3]

// function CountArrayValues(arr) {
//   let obj = {};
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] += 1;
//     } else obj[arr[i]] = 1;
//   }
//   for (let key in obj) {
//     result.push({ [key]: obj[key] });
//   }
//   return result;
// }

// console.log(CountArrayValues(values));

// // const input = [4, 3, 2, 7, 8, 2, 3, 1];
// // output > [2,3]

// function DuplicateElementPair(arr) {
//   let result = [];
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       result.push(arr[i]);
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }
//   return result;
// }

// // console.log(DuplicateElementPair(input));

// function calc(job) {
//   var income = 5;
//   if (job) {
//     var income = 50;
//   }
//   {
//     var income = 500;
//   }
//   {
//     var income = 5000;
//   }
//   return income;
// }

// // console.log(calc(true));

// const input = [2, 7, 11, 15, 5, 4, 4];
// const target = 9;
// // output return [1, 2];

// function SortArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }
//   return arr;
// }

// // console.log(SortArray(input));

// let result1 = [];
// function SumByTarget(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         result1.push([i, j]);
//       }
//     }
//   }
//   return result1;
// }

// // console.log(SumByTarget(input, target));

// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 5 },
//   { name: "bananas", type: "fruit", quantity: 0 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 5 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];

// const result2 = Object.groupBy(inventory, ({ type }) => type);
// console.log(result2);

// console.log(Object.getPrototypeOf("foo"));
// console.log(Object.getPrototypeOf([]));
// console.log(Object.getPrototypeOf({}));
// console.log(Object.getPrototypeOf(true));
// console.log(Object.getPrototypeOf(new Map()));
// console.log(Object.getPrototypeOf(new Set()));

// const object11 = { a: 1, b: 2, c: 3 };

// const object2 = Object.fromEntries(
//   Object.entries(object11).map(([key, value]) => [key, value * 2])
// );

// console.log(object2);

// const map = [[4, 6, 3, 6]];
// const objtest = Object.fromEntries(map);
// console.log(objtest);

// let person1 = {
//   isHuman: false,
//   name: "Nirmal",
//   age: 32,
//   programming: "UI",
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person1);

// // console.log();
// const mapObject = new Map(Object.entries(person1));
// console.log(mapObject.has("isHuman"));

// for (let [key, value] of Object.entries(person1)) {
//   console.log(`${key} ${value}`);
// }

// me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // Inherited properties can be overwritten

// me.printIntroduction();

// // Expected output: "My name is Matthew. Am I human? true"

// const obj2 = new Object();
// obj.name = "Nirmal";
// obj.address = { city: "Pune" };

// // Object Assign

// const anotherObject = Object.assign({}, obj2);

// const obj3 = {
//   foo: 1,
//   get bar() {
//     return 2;
//   },
// };

// let copy = Object.assign({}, obj3);
// console.log(copy);

// const structuredCloneObj = structuredClone(obj);
// obj.address.city = "Banglore";

// console.log(obj);
// console.log(structuredCloneObj);

// function curryingAdd(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d;
//       };
//     };
//   };
// }

// // console.log(curryingAdd(5)(4)(8)(4));

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.city = "Indore";
// Person.prototype.greet = function () {
//   console.log(`Hello ${this.name}, your age is ${this.age}`);
// };
// var person111 = new Person("John", 30);
// console.log(person111.greet());

// const fetchUserData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// async function fetchUserDataAsyncAwait() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log(fetchUserDataAsyncAwait());

// const person = {
//   name: "Nirmal Kumar",
//   age: 34,
// };

// function printName(...message) {
//   return `${message} ${this.name}, your age is ${this.age}`;
// }

// console.log(printName.apply(person, ["Hello", "World"])); // Output: Hello Nirmal Kumar

// // Implementing callback function

// function outerFunction() {
//   let outerVariable = "I am outside!";

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// const closure = outerFunction();
// closure(); // Output: I am outside!

// const addition = (...numbers) => {
//   console.log(numbers);
//   // let sum = 0;
//   // for (let i = 0; i < numbers.length; i++) {
//   //   sum += numbers[i];
//   // }
//   // return sum;
// };

// console.log(addition(1, 2, 3, 4)); // output ========> 10

// addNumber = (a, b, callBackFn) => {
//   console.log("Addition of two numbers: ", a + b);
//   const result = a + b;
//   callBackFn(result);
// };

// function callBackFn(result) {
//   console.log("Result: ", result);
//   console.log("Callback function is called");
// }

// addNumber(5, 6, callBackFn);

// console.log(b);
// var b = 10;

// function Hoisting() {
//   console.log("Hoisting");
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }

// Hoisting();

// function generateObject() {}

// const object1 = new generateObject();

// console.log(object1);

// (() => {
//   console.log("IIFE");
// })();

// // **Set a cookie**
// document.cookie = "username=nirmalkumar";

// //**Read a cookie**
// let cookie_variable = document.cookie;

// console.log(cookie_variable);

// //**Delete a cookie** (set the expiration date to a past date/time)
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
// document.cookie = "expires=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

// var promise = Promise.resolve().then(() => {
//   return [3, 6, 3, 5];
// });

// promise.then((value) => {
//   console.log(promise);
//   console.log("value =", value);
// });

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("error"));
//   }, 2000);
// });

// promise1
//   .then((value) => {})
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finally"));

// let zero = 0;
// console.log(typeof zero);

// if (zero) {
//   // zero is true, because it's an object
//   console.log("running");
//   console.log(typeof zero);
// }

// let object = {};
// console.log(typeof object);

// const arrayCheck = [];
// console.log(typeof arrayCheck);

// console.log(Array.isArray(array));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("done");
//   }, 2000);
// }).then((value) => console.log(value));

// // promise.then((value) => {
// //   console.log(value);
// // });

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// delay(2000).then(() => console.log("done"));
