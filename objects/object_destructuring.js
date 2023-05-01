let person = {
    name: "rahul",
    age: 28,
    "1": "value1",
    "my choice": "value2"
};
let {name, age} = person;   //Object destructuring
console.log(name); // output:rahul
console.log(age); // output:28
 