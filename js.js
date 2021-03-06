
// This hides empty GIFY box on page load
$(function () {
    $("#gifs-view").hide();
});

// this is my personal giphy api key
let APIKEY = "AO19ApHDYRwaLBR55kjmQCddKIcDrAKy";

//this is an array of flowers
var flowers = ["Rose", "Daisies", "Orchid", "Sunflower", "Tulip", "Peony"];

// below function not complete. need to look at query url formatting and get gifs to dispaly differently for each click- somehow work in on click event

function displayFlowerGifs() {
    // this empties and fills GIF box based on functions below
    $("#gifs-view").empty();
    $("#gifs-view").show();

    // this uses the Giphy API and flower search for displaying GIFs dynamkically 
    var flower = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + flower + "&api_key=AO19ApHDYRwaLBR55kjmQCddKIcDrAKy&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"

    })
        .then(function (response) {
            console.log(response);
            var results = response.data;

            // looping through each result item
            for (var i = 0; i < results.length; i++) {

                // creating and storing a div tag
                var flowerDiv = $("<div>");

                // creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                var flowerStill = results[i].images.fixed_height_still.url;
                var flowerPlay = results[i].images.fixed_height.url;
                // creating and storing an image tag
                var flowerImage = $("<img>").addClass("gif");
                // setting the src attribute of the image to a property pulled off the result item
                flowerImage.attr("src", flowerStill);

                //this adds the still and animate attributes to the flowerImage
                flowerImage.attr("data-state", "still", "animate");
                flowerImage.attr("data-animate", flowerPlay);
                flowerImage.attr("data-still", flowerStill);

                // appending the paragraph and image tag to the flower Div
                flowerDiv.append(p);
                flowerDiv.append(flowerImage);

                //displaying gifs
                $("#gifs-view").prepend(flowerDiv);

                // this function animates gifs on click - original that only animates some
                $(flowerImage).on("click", function () {
                    console.log("clicked");
                    var gifStatus = $(this).attr("data-state");

                    if (gifStatus === "still") {
                        console.log("start")
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");

                    } else if (gifStatus !== "still") {
                        console.log("stop");
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });
            }

        });
};


// Function for displaying flower array data as buttons
function displayButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < flowers.length; i++) {
        var a = $("<button>");
        a.addClass("flower-btn");
        a.attr("data-name", flowers[i]);
        a.text(flowers[i]);
        $("#buttons-view").prepend(a);
    }
}

function resetSearch() {
    $("#flower-input").val("");
};

// this function takes the input value and adds it to the existing array of flowers
$("#add-flower").on("click", function (event) {

    event.preventDefault();

    var flower = $("#flower-input").val().trim();
    flowers.push(flower);
    displayButtons();
    resetSearch();

});

// this function adds event listener to click and displays gifs pertaining to button clicked
$(document).on("click", ".flower-btn", displayFlowerGifs);

// this displays the flower buttons 
displayButtons();
