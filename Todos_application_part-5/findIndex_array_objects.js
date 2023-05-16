let customersData = [{
    name: "Rahul",
    id: 101
},
{
    name: "Bhagyaraj",
    id: 102
},
{
    name: "Vinod",
    id: 174
}
];
let itemIndex = customersData.findIndex(function(eachItem) {
if (eachItem.id === 102) {
    return true;
} else {
    return false;
}
});
console.log(itemIndex)