// Object destucturing
// const person = {
//   name: "Phone",
//   age: 24,
//   location: {
//     city: "VT",
//     temp: 32
//   }
// };
// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// Array destructuring
const address = ["123 street", "VT", "Laos"];
const [street, city, country] = address;
console.log(`You are in ${street} ${city}`);
