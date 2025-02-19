let Person = {
  name: "Nirmal",
  age: 34,
  address: {
    city: "Pune",
    state: "MH",
  },
};

let obj = {
  name: "Nirmal",
  age: 34,
  address: {
    city: "Pune",
    state: "MH",
  },
};
let copyObj = { ...obj };
obj.address.city = "Nagpur";
console.log(obj);
console.log(copyObj);

// Shallow Copy - 1

let personCopy1 = { ...Person };
personCopy1.address.city = "Nagpur";
console.log(personCopy1);

// Shallow Copy - 2

let personCopy2 = Object.assign({}, Person);
Person.address.city = "Amravati";
console.log(personCopy1);

// Shallow Copy - 3

let personCopy3 = {};
for (let prop in Person) {
  personCopy3[prop] = Person[prop];
}
Person.address.city = "Pune";
console.log(personCopy3);

// Deep Copy - 1

let deepClone1 = structuredClone(Person);
Person.address.city = "Satara";
console.log(deepClone1);

// Deep Copy - 1

let deepClone2 = JSON.parse(JSON.stringify(Person));
deepClone2.address.city = "Ahmedabad";
console.log(deepClone2);
