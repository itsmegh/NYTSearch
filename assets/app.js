$(document).ready(function(){
//SETUP VARIABLES
//==========================
  var APIKey = "59944c64d39b4d578acf50b00ab62ffd";

  //search parameters
  var queryTerm = "";
  var numResults = 0;
  var startYear = 0;
  var endYear = 0;

        
  var queryurlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey ;

//FUNCTIONS
// =========================

//MAIN PROCESSES
// =========================

// 1. Retrieve user inputs and convert to variables
// 2. Use variables to run an AJAX call to NYT
// 3. Break down the NYT object into usable fields
// 4. Dynamically generate html content

// 5. Deal with "edge cases" -- bugs that aren't obvious or didn't expect




    
    
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