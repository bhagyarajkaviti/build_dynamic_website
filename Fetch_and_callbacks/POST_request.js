let data = {
    name: "Bhagyaraj",
    gender: "Male",
    email: "bhaghi@gmail.com",
    status: "active"
}

let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer 32aefff4f82d1767f6680d9a8bbb9efdf28556227ce9f50234357d1c46a406a7"
    },
    body: JSON.stringify(data)
};
fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(abc) { //`abc` is nothing but above returned `json()``
        console.log(abc);
    });