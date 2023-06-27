function displayGreeting(displayName) {
    console.log("Hello");
    displayName();
    console.log("Good Morning");
}

displayGreeting(function() {
    console.log("Bhagyaraj");
});