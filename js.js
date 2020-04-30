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
