let options = {
    method: "GET"
};
fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(abc) {
        console.log(abc);
    });