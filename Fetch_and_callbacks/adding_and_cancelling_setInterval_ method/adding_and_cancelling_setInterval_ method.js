let setIntervalBtn = document.getElementById("setIntervalBtn");
let clearIntervalBtn = document.getElementById("clearIntervalBtn");
let uniquId = null;
setIntervalBtn.onclick = function() {
    let counter = 0;
    uniquId = setInterval(function() {
        console.log(counter);
        counter = counter + 1;
    }, 1000);
    console.log(uniquId);
}

clearIntervalBtn.onclick = function() {
    clearInterval(uniquId);
    console.log("Interval Cleared");
}