// /* Delete operator does not delete properties added through prototype.
//     it can delete properties and method added on self
// */

// var Employee = {
//   company: "Acme",
// };
// var employee1 = Object.create(Employee);
// employee1.name = "Nirmal";
// console.log(employee1);
// delete employee1.name;
// console.log(employee1.name);

// /*
//     Hoisting - Only function declration gets hoisted not assignment. here bar would be output properly
//     but foo will give error.

// */

// foo();

// var foo = function () {
//   console.log("foo");
// };

// bar();

// function bar() {
//   console.log("bar");
// }

// // Two ways to create dynamic array on run time

// console.log(Array(5)); // length = 5
// console.log([5]); // length = 1

// // const arr = ["JS", "PHP", "Python", "JS", "Java", "JS", "JS"];
// // const find = "JS";
// // // output - 3

// // let count = 0;

// // // arr.forEach((e) => {
// // //   if (e === find) {
// // //     count += 1;
// // //   }
// // // });

// // const countOccurance = (arr, value) =>
// //   arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

// // console.log(countOccurance(arr, find));

// // const dynamicArray = new Array(5).fill(null);
// // dynamicArray.forEach((_, index) => {
// //   console.log(`Index: ${index}`);
// // });

// const listNode = document.querySelectorAll("ul")[0].children;

// const onlyRed = [...listNode].map((e) =>
//   e.style.color === "red" ? e.textContent : null
// );

// console.log(onlyRed);
// if(listNode) {
//     const listDomNode = listNode[0];
// }

// function traverseDOM(node) {
//   console.log(node);
//   const children = node.children;
//   for (let child of children) {
//     traverseDOM(child);
//   }
// }

// traverseDOM(document.body);

// if (window.Worker) {
//   const myWorker = new Worker("Worker.js");

//   myWorker.postMessage("Hello, Worker!");

//   myWorker.onmessage = function (event) {
//     console.log("Message from Worker:", event.data);
//   };

//   myWorker.onerror = function (error) {
//     console.error("Error from Worker:", error);
//   };
// }

// const object1 = {
//   name: "Nirmal",
//   age: "34",
//   address: {
//     city: "Pune",
//     state: "MH",
//     country: "IN",
//   },
//   phone: "4555",
// };

// const object2 = {
//   name: "Nirmal",
//   age: "35",
//   address: {
//     city: "Nagpur",
//     state: "MH",
//     country: "IN",
//   },
//   phone: "1234",
// };

// function compareObjects(object1, object2) {
//   const diffKeys = {};

//   for (const key in object1) {
//     if (object1[key] !== object2[key]) {
//       if (
//         typeof object1[key] === "object" &&
//         typeof object2[key] === "object"
//       ) {
//         for (const subKey in object1[key]) {
//           if (object1[key][subKey] !== object2[key][subKey]) {
//             diffKeys.push(`${key}.${subKey}`);
//           }
//         }
//       } else {
//         diffKeys.push(key);
//       }
//     }
//   }

//   return diffKeys;
// }

// console.log(compareObjects(object1, object2));

const fruits = [
  {
    type: "oranges",
    amount: 10,
  },
  {
    type: "apples",
    amount: 0,
  },
  {
    type: "oranges",
    amount: 5,
  },
];

function groupByType(fruits) {
  //   return fruits.reduce((acc, fruit) => {
  //     if (!acc[fruit.type]) {
  //       acc[fruit.type] = 0;
  //     }
  //     acc[fruit.type] += fruit.amount;
  //     return acc;
  //   }, {});

  return fruits.reduce((acc, fruit) => {
    if (!acc[fruit.type]) {
      acc[fruit.type] = 0;
    }
    acc[fruit.type] += fruit.amount;
    return acc;
  }, {});
}

console.log(groupByType(fruits));
