document.getElementById("button1").style.backgroundColor = "#e0e0e0";
document.getElementById("button2").style.backgroundColor = "#6fcf97";
document.getElementById("button3").style.backgroundColor = "#56ccf2";
document.getElementById("button4").style.backgroundColor = "#bb6bd9";

function button1() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#e0e0e0";
    document.getElementById("selectedColorHexCode").textContent = "#e0e0e0";
}

function button2() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#6fcf97";
    document.getElementById("selectedColorHexCode").textContent = "#6fcf97";
}

function button3() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#56ccf2";
    document.getElementById("selectedColorHexCode").textContent = "#56ccf2";
}

function button4() {
    document.getElementById("colorPickerContainer").style.backgroundColor = "#bb6bd9";
    document.getElementById("selectedColorHexCode").textContent = "#bb6bd9";
}