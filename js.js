// Create an array of flowers
// Create and empty div for buttons
// Create a for loop of flowers
// Push flowers into buttons on page

// Add GIPHY API Key
// Get response of key
// Create event listener for buttons
// Have buttons link to GIPHY search
// Have GIPHY search resuts appear on screen

// Create search box
// Connect search box to GIPHY search
// Have searches create new buttons and stay on screen



// this is my personal giphy api key
let APIKEY = "AO19ApHDYRwaLBR55kjmQCddKIcDrAKy";

//this is an array of flowers
var flowers = ["Roses", "Lillies", "Gardenias", "Daisies", "Orchids", "Sunflowers", "Tulips", "Peonies"];

// below function not complete. need to look at query url formatting and get gifs to dispaly
function displayFlowerGifs() {
    // $("button").on("click", function () {

    var flower = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + flower + "&api_key=AO19ApHDYRwaLBR55kjmQCddKIcDrAKy&q=flower&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"

    })

        .then(function (response) {
            console.log(response);
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // Creating and storing a div tag
                var flowerDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing an image tag
                var flowerImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                flowerImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and image tag to the animalDiv
                flowerDiv.append(p);
                flowerDiv.append(flowerImage);

                //displaying gifs
                $("#gifs-view").prepend(flowerDiv);
            }

        });
};

displayFlowerGifs()

// Function for displaying flower array data as buttons
function displayButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < flowers.length; i++) {
        var a = $("<button>");
        a.addClass("flower");
        a.attr("data-name", flowers[i]);
        a.text(flowers[i]);
        $("#buttons-view").append(a);
    }
}

// This function takes the input value and adds it to the existing array of flowers

$("#add-flower").on("click", function (event) {
    event.preventDefault();
    var flower = $("#flower-input").val().trim();
    flowers.push(flower);
    displayButtons();
});

displayButtons();
