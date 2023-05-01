let person = {
    name: "rahul",
    age: 28,
    "1": "value1",
    "my choice": "value2"
};
console.log(person);
console.log(person.name);    //dot notation
console.log(person['name']); //bracket notation
console.log(person.age);
console.log(person['age'])
console.log(person["my choice"]);   
console.log(person[1]);
