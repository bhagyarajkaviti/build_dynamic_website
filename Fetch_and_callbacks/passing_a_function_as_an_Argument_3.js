function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning");
}

let displayBhaghi = function() {
    console.log("Bhagyaraj");
}
displayGreeting(displayBhaghi);