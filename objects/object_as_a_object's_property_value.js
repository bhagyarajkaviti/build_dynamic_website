let person = {
    name: "rahul",
    age: 28,
    car:{
        name:"audi",
        model: "A6",
        color: "white"
    }
};
console.log(person); //Output:{ name: 'rahul', age: 28, car: { name: 'audi', model: 'A6', color: 'white' } }
console.log(person["name"]); //Output:rahul
console.log(person["car"]); //Output:{ name: 'audi', model: 'A6', color: 'white' }
console.log(person.car.color); //Output:white
console.log(person.car["name"]) //Output:audi





