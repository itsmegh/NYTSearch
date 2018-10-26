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

  //variable to track the number of articles
  var articleCounter = 0;

//FUNCTIONS
// =========================

  function runQuery(numArticles, queryurl){
    //AJAX function
    $.ajax({url: queryurl, method: "GET"})
    .done(function(NYTdata) {

      //log to the console so we have access to the information we need
      console.log(queryurl);
      console.log(NYTdata);
    })

  }

  

//MAIN PROCESSES
// =========================
  $("#searchBtn").on("click", function() {
    
    queryTerm = $("#search").val().trim();
    console.log(queryTerm);

    //add in the search term
    var newURL = queryurlBase + "&q=" + queryTerm;
    console.log(newURL);

    //get the number of records

    //get the start and end year
    startYear = $("#startYear").val().trim();
    endYear = $("#endYear").val().trim();

    //add the data information to the URL, and add in the month and date since only year required
    if(parseInt(startYear)) {
      startYear = startYear + "0101";
      newURL = newURL + "&begin_date=" + startYear;
    }

    if(parseInt(endYear)) {
      endYear = endYear + "0101";
      newURL = newURL + "&end_date=" + endYear;
    }
    console.log(newURL);

    //send the AJAX call the new assembled URL
    runQuery(10, newURL);

    return false; //prevents a new page refresh

  })
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