let profile = {
    name: "Bhagyaraj",
    age: 29,
    designation: "Web Developer"
}

localStorage.setItem("profileDetails", JSON.stringify(profile)); //JSON.stringify() method has been used

let stringifiedProfileDetails = localStorage.getItem("profileDetails");
let parsedProfileDetails = JSON.parse(stringifiedProfileDetails); //JSON.parse() method has been used
console.log(parsedProfileDetails);