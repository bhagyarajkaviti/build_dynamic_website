let person = {
    name: "rahul",
    age: 28,
    "1": "value1",
    "my choice": "value2"
};
let a = "name"
console.log(person[a]);
        // in `person[a]` here `a` is considered as variable
console.log(person.a);
        // in `person.a` here `a` is considered as a key