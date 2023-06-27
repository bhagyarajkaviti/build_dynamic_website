function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning");
}

function displayBhaghi() {
    console.log("Bhagyaraj");
}
displayGreeting(displayBhaghi);