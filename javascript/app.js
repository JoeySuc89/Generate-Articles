

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=n6kd0XbtbGeBReBcPgcYH0yGX8nVo5uH";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

  });
