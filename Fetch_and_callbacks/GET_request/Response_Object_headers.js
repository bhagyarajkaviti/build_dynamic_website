let options = {
    method: "GET"
};
fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
        return response.headers;
    })
    .then(function(headers) {
        console.log(headers);
    });