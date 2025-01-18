const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result);

console.log(Object.getPrototypeOf("foo"));
console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf(true));
console.log(Object.getPrototypeOf(new Map()));
console.log(Object.getPrototypeOf(new Set()));

const object11 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object11).map(([key, value]) => [key, value * 2])
);

console.log(object2);

const map = [[4, 6, 3, 6]];
const objtest = Object.fromEntries(map);
console.log(objtest);

let person1 = {
  isHuman: false,
  name: "Nirmal",
  age: 32,
  programming: "UI",
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person1);

// console.log();
const mapObject = new Map(Object.entries(person1));
console.log(mapObject.has("isHuman"));

for (let [key, value] of Object.entries(person1)) {
  console.log(`${key} ${value}`);
}

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();

// Expected output: "My name is Matthew. Am I human? true"

const obj = new Object();
obj.name = "Nirmal";
obj.address = { city: "Pune" };

// Object Assign

const anotherObject = Object.assign({}, obj);

const obj3 = {
  foo: 1,
  get bar() {
    return 2;
  },
};

let copy = Object.assign({}, obj3);
console.log(copy);

const structuredCloneObj = structuredClone(obj);
obj.address.city = "Banglore";

console.log(obj);
console.log(structuredCloneObj);

function curryingAdd(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

console.log(curryingAdd(5)(4)(8)(4));

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.city = "Indore";
Person.prototype.greet = function () {
  console.log(`Hello ${this.name}, your age is ${this.age}`);
};
var person111 = new Person("John", 30);
console.log(person111.greet());

const fetchUserData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

async function fetchUserDataAsyncAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

console.log(fetchUserDataAsyncAwait());

const person = {
  name: "Nirmal Kumar",
  age: 34,
};

function printName(...message) {
  return `${message} ${this.name}, your age is ${this.age}`;
}

console.log(printName.apply(person, ["Hello", "World"])); // Output: Hello Nirmal Kumar

// Implementing callback function

function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I am outside!

const addition = (...numbers) => {
  console.log(numbers);
  // let sum = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   sum += numbers[i];
  // }
  // return sum;
};

console.log(addition(1, 2, 3, 4)); // output ========> 10

addNumber = (a, b, callBackFn) => {
  console.log("Addition of two numbers: ", a + b);
  const result = a + b;
  callBackFn(result);
};

function callBackFn(result) {
  console.log("Result: ", result);
  console.log("Callback function is called");
}

addNumber(5, 6, callBackFn);

console.log(b);
var b = 10;

function Hoisting() {
  console.log("Hoisting");
  console.log(a);
  var a = 10;
  console.log(a);
}

Hoisting();

function generateObject() {}

const object1 = new generateObject();

console.log(object1);

(() => {
  console.log("IIFE");
})();

// **Set a cookie**
document.cookie = "username=nirmalkumar";

//**Read a cookie**
let cookie_variable = document.cookie;

console.log(cookie_variable);

//**Delete a cookie** (set the expiration date to a past date/time)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
document.cookie = "expires=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

var promise = Promise.resolve().then(() => {
  return [3, 6, 3, 5];
});

promise.then((value) => {
  console.log(promise);
  console.log("value =", value);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error"));
  }, 2000);
});

promise1
  .then((value) => {})
  .catch((error) => console.log(error))
  .finally(() => console.log("finally"));

let zero = 0;
console.log(typeof zero);

if (zero) {
  // zero is true, because it's an object
  console.log("running");
  console.log(typeof zero);
}

let object = {};
console.log(typeof object);

const array = [];
console.log(typeof array);

console.log(Array.isArray(array));

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
  }, 2000);
}).then((value) => console.log(value));

// promise.then((value) => {
//   console.log(value);
// });

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => console.log("done"));
