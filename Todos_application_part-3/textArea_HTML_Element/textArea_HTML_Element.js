let saveButton = document.getElementById("saveButton");
let textAreaElement = document.getElementById("textAreaElement");
saveButton.onclick = function() {
    let userEnteredText = textAreaElement.value;
    localStorage.setItem("userEnteredText", userEnteredText);
}

let storedUserText = localStorage.getItem("userEnteredText");
if (storedUserText === null){
    textAreaElement = "";
}
else{
    textAreaElement.value = storedUserText;
}