let options = {
    method: "GET"
};
fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
        return response.statusText;
    })
    .then(function(statusText) {
        console.log(statusText);
    });