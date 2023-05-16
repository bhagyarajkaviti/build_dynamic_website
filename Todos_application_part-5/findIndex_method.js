let myArray = [5, 12, 8, 130, 44];
let itemIndex = myArray.findIndex(function(eachItem) {
    if (eachItem === 130) {
        return true;
    } else {
        return false;
    }
});
console.log(itemIndex);