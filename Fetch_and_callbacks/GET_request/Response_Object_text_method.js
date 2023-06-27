let options = {
    method: "GET"
};
fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
        return response.text();
    })
    .then(function(abc) {
        let parseData = JSON.parse(abc);
        console.log(parseData);
    });