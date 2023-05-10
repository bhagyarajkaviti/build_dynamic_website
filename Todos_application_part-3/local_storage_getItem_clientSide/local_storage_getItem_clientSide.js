//localStorage.setItem("name", "bhagyaraj");
//localStorage.setItem("village", "gunjilova");
//localStorage.setItem("mandal", "kotabommali");
//localStorage.setItem("district", "srikakulam");
//localStorage.setItem("state", "andhra pradesh");



let name = localStorage.getItem("name");
let village = localStorage.getItem("village");
let mandal = localStorage.getItem("mandal");
let district = localStorage.getItem("district");
let state = localStorage.getItem("state");

let occuppation = localStorage.getItem("occuppation"); //we haven't given `occuppation` key-value pairs in setItem() method.
let a = localStorage.getItem("age"); // //we haven't given `age` key-value pairs in setItem() method.

console.log(name);
console.log(village);
console.log(mandal);
console.log(district);
console.log(state);
console.log(occuppation);
console.log(a);