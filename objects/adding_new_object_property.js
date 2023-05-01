let person = {
    name: "rahul",
    age: 28,
    "1": "value1",
    "my choice": "value2"
};

person.gender = "male"; //adding new property using dot notation
person["city"] = "hyderabad"; //adding new property using bracket notation
console.log(person); //Output:Object{ 1:"value1",name:"rahul",age:28,my choice:"value2",gender:male,city:"hyderabad"}