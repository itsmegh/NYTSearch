$(document).ready(function(){
//SETUP VARIABLES
//==========================
  var APIKey = "67b8b07723c64905903d180a100c7463";

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

      //clear the wells from the previous search
      $("#wellSection").empty();

      //looping through the information we want from the JSON
      for(var i=0; i<numArticles; i++) { //NYTdata.response.docs.length -- what we had in our loop at first to check that it's working
        console.log(NYTdata.response.docs[i].headline.main);
        console.log(NYTdata.response.docs[i].news_desk);
        console.log(NYTdata.response.docs[i].pub_date);
        console.log(NYTdata.response.docs[i].byline.original);
        console.log(NYTdata.response.docs[i].web_url);

        //start dumping to HTML here
        //created a new variable that will hold the attributes for the html id we created "wellSection"
        var wellSection = $("<div>");
        wellSection.addClass("well");
        wellSection.attr("id", "articleWell-" + i);
        //add the new variable and attributes we created to the html id
        $("#wellSection").append(wellSection);

        if(NYTdata.response.docs[i].headline != "null") {
          console.log(NYTdata.response.docs[i].headline.main);
          $("#articleWell-" + i).append("<h3>" + NYTdata.response.docs[i].headline.main + "</h3>");
        }

        //check if the byline is there
        if(NYTdata.response.docs[i].byline && NYTdata.response.docs[i].byline.hasOwnProperty("original")) {
          console.log(NYTdata.response.docs[i].byline.original);
          $("#articleWell-" + i).append("<h5>" + NYTdata.response.docs[i].byline.original + "</h5>");
        } 

        //attached the content to the appropriate well
        $("#articleWell-" + i).append("<h5>" + NYTdata.response.docs[i].news_desk + "</h5>");
        $("#articleWell-" + i).append("<h5>" + NYTdata.response.docs[i].pub_date + "</h5>");
        $("#articleWell-" + i).append("<h5>" + NYTdata.response.docs[i].snippet + "</h5>");
        $("#articleWell-" + i).append("<a href=" + NYTdata.response.docs[i].web_url + ">" + NYTdata.response.docs[i].web_url + "</a>");


      }


      //log to the console so we have access to the information we need
      console.log(queryurl);
      console.log(NYTdata);
    })

  }

  

//MAIN PROCESSES
// =========================
  $("#searchBtn").on("click", function() {
    
    queryTerm = $("#search").val().trim();
    //console.log(queryTerm);

    //add in the search term
    var newURL = queryurlBase + "&q=" + queryTerm;
    //console.log(newURL);

    //get the number of records
    numResults = $("#numRecords").val();

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
    runQuery(numResults, newURL); // removed the hard coded number and replace with numResults
    //initially had a 10 and a url that pulled test results before replacing with our new variables

    return false; //prevents a new page refresh

  })
// 1. Retrieve user inputs and convert to variables
// 2. Use variables to run an AJAX call to NYT
// 3. Break down the NYT object into usable fields
// 4. Dynamically generate html content

// 5. Deal with "edge cases" -- bugs that aren't obvious or didn't expect


});