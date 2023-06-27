let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let workingStatusEl = document.getElementById('status');

let genderMaleEl = document.getElementById('genderMale');

let genderFemaleEl = document.getElementById('genderFemale');

let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
});

workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
    console.log(event.target.value);
});

genderMaleEl.addEventListener('change', function(event) {
    formData.gender = event.target.value;
    console.log(event.target.value);
});

genderFemaleEl.addEventListener('change', function(event) {
    formData.gender = event.target.value;
    console.log(event.target.value);
});

function validateFormData(formData) {
    let {
        name,
        email
    } = formData;
    if (name === "") {
        nameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
    }
}

function submitFormData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            authorization: "Bearer 32aefff4f82d1767f6680d9a8bbb9efdf28556227ce9f50234357d1c46a406a7"
        },
        body: JSON.stringify(formData)
    };
    let url = "https://gorest.co.in/public-api/users";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData); //id: 2953533
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken" && jsonData.data[0].field === "email") {
                    emailErrMsgEl.textContent = "Email Already Exists";
                }
            }
        });
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    submitFormData(formData);
});