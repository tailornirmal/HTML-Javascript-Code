function isEmpty(obj) {
//   First Way
  if (JSON.stringify(obj) !== "{}") {
    return false;
  }

  // Second Way
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       return false; // Not empty
//     }
//   }

  // Third Way
//   if (Object.keys(obj).length) {
//     return false;
//   }

  return true;
}

let Person = {
  name: "Nirmal",
  age: 34,
  language: 'React',
  "hobbies": ['Reading','Coding'],
  address: {
      city: 'Pune',
      state: 'MH'
  }
};

console.log(isEmpty(Person));
