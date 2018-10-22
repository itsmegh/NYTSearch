$(document).ready(function(){

    var APIKey = "59944c64d39b4d578acf50b00ab62ffd";

    
        
    var queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey ;
    
    $.ajax({
      url: queryurl,
      method: 'GET',
    })
    
    .done(function(response) {
      console.log(response);
      console.log(queryurl);
    })

    var searchTerm = queryurl + "&q=xyz";
    $(".search").text(searchTerm);
});