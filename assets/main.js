var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=SSW539kmRd4xY6ZUepgOMDZRryTAJPwR";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});