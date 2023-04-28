let h1Element = document.createElement('h1'); // creating an HTML Element `h1`
h1Element.textContent = "Web Technologies";
//console.log(h1Element);
//document.body.appendChild(h1Element);  //When an HTML element appending to document body Object
let containerElement = document.getElementById('myContainer');
containerElement.appendChild(h1Element);

let btnElement = document.createElement('button');
btnElement.textContent = "change heading and add Styles";
btnElement.onclick = function() {
    console.log("click event triggered");
    h1Element.textContent = "4.0 Technologies";
    //h1Element.style.color = "blue";
    //h1Element.style.fontSize = "40px";
    //h1Element.style.fontFamily = "Caveat";
    //h1Element.style.textDecoration = "underline";
    h1Element.classList.add('heading');
};
containerElement.appendChild(btnElement);

let removeStyleBtnElement = document.createElement('button');
removeStyleBtnElement.textContent = "Remove styles";
removeStyleBtnElement.onclick = function() {
    h1Element.classList.remove('heading');
};
containerElement.appendChild(removeStyleBtnElement);


//console.log(containerElement);