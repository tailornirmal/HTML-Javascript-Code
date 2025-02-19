/* Delete operator does not delete properties added through prototype.
    it can delete properties and method added on self 
*/

var Employee = {
  company: "Acme",
};
var employee1 = Object.create(Employee);
employee1.name = "Nirmal";
console.log(employee1);
delete employee1.name;
console.log(employee1.name);

/* 
    Hoisting - Only function declration gets hoisted not assignment. here bar would be output properly
    but foo will give error.

*/

foo();

var foo = function () {
  console.log("foo");
};

bar();

function bar() {
  console.log("bar");
}

// Two ways to create dynamic array on run time

console.log(Array(5)); // length = 5
console.log([5]); // length = 1

// const arr = ["JS", "PHP", "Python", "JS", "Java", "JS", "JS"];
// const find = "JS";
// // output - 3

// let count = 0;

// // arr.forEach((e) => {
// //   if (e === find) {
// //     count += 1;
// //   }
// // });

// const countOccurance = (arr, value) =>
//   arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

// console.log(countOccurance(arr, find));

// const dynamicArray = new Array(5).fill(null);
// dynamicArray.forEach((_, index) => {
//   console.log(`Index: ${index}`);
// });
