
var authKey = "rtUoX0RChcNWQbZm4MbcrLrqpSCJ2MNh";


var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;
var test = 0

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=rtUoX0RChcNWQbZm4MbcrLrqpSCJ2MNh";


//https:api.nytimes.com/svc/search/v2/articlesearch.json?
//api-key=abcd&
//q=qwer&
//date=2019-03-23&
//...

  var articleCounter = 0;
  function runQuery(numArticles, queryURL) {


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      for (var i = 0; i < numArticles; i++) {


        articleCounter++;

        var wellSection = $("<div>");
