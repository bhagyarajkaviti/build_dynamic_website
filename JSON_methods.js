let profile = {
    name: "Bhagyaraj",
    age: 26,
    designation: "Web Developer"
}

//converting the JS Object into JSON object
let stringifiedProfile = JSON.stringify(profile);
console.log(stringifiedProfile);
console.log(typeof(stringifiedProfile));

// converting the JOSON Object in to JS object.
let parsedProfile = JSON.parse(stringifiedProfile);
console.log(parsedProfile);
console.log(typeof(parsedProfile));