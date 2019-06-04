

var custom_api_url = "https://5c0aeda926902800135f6d07.mockapi.io/classes/1";


// Question #1: 
$("#q1").click(function() { 
    $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            console.log(response);
        }
    }); 
    
});

// Question #2:
$("#q2").click(function() { 
    $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
        $("body").append("<img src='" + response["pic_url"] + "'>");

        }   
    }); 
    
});

// Question #3:
$("#q3").click(function() { 
    $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            console.log(response["num_students"]);

        }   
    }); 
});

// Question #4:
$("#q4").click(function() { 
    $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
            console.log(response.favorites.foods[0]);
     }   
    }); 



    
});

// Question #5:
$("#q5").click(function() { 
       $.ajax({
        url: custom_api_url,
        method: "GET",
        success: function(response) {
            console.log(response["site_url"]);
        $("body").append("<a href='" + response["site_url"] + "'>" + "<p>Code Nation</p>");
     }   
    }); 




    
});


