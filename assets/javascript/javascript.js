

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=sobuJiPKCsf6W5ro2e1rhPnxEzcduwV5"


    let article = $(this).attr("data-article")
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response){
          console.log(response)
          $("#searchButton").on("click", function(){
            console.log(response)
          })
        })