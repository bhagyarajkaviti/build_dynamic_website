let myArray = [5, "abc", 10.54, 20];
let deletedItems = myArray.splice(1, 2);
console.log(myArray); //output:Array [5, 20]
console.log(deletedItems); //output:Array ["abc", 10.54]