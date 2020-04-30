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

//this is an array of exercises
let flowers = ["Roses", "Lillies", "Gardenias", "Daisies", "Orchids", "Sunflowers", "Tulips", "Peonies"]


function alertFlowerName() {
    var flowerName = $(this).attr("data-name");

    alert(flowerName);
}

function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < flowers.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("flower");
        // Adding a data-attribute
        a.attr("data-name", flowers[i]);
        // Providing the initial button text
        a.text(flowers[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);
    }
}


// function displayGif() {


//     var exercise = $(this).attr("data-name");
//     // Example queryURL for Giphy API
//     var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=AO19ApHDYRwaLBR55kjmQCddKIcDrAKy";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);
//     });