let person = {
    name: "rahul",
    age: 28,
    "1": "value1",
    "my choice": "value2"
};

person.name = "bhagyaraj";
console.log(person.name); //Output:bhagyaraj
console.log(person["name"])  //Output:bhagyaraj