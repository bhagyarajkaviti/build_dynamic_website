let options = {
    method: "GET"
};
fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
        return response.status;
    })
    .then(function(status) {
        console.log(status);
    });