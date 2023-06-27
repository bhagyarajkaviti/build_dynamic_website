let data = {
    name: "Dharma Raj (Bhagyaraj)",
    email: "raju@gmail.com",
}

let options = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 32aefff4f82d1767f6680d9a8bbb9efdf28556227ce9f50234357d1c46a406a7"
    },
    body: JSON.stringify(data)
};
fetch("https://gorest.co.in/public-api/users/2594791", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(abc) { //`abc` is nothing but above returned `json()``
        console.log(abc);
    });