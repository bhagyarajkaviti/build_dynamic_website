let myArray = [5, "abc", 10.5, 20];
let addedItems = myArray.splice(2, 0, "xyz", 50, 10);
console.log(myArray); //Array [5, "abc", "xyz", 50, 10, 10.5, 20]
console.log(addedItems); //Array []