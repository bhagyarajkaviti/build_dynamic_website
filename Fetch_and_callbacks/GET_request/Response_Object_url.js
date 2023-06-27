let options = {
    method: "GET"
};
fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
        return response.url;
    })
    .then(function(url) {
        console.log(url);
    });