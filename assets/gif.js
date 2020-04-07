$(document).ready(function() {

// Creating an array for topics var
var funnyPpl = ["tom segura", "joe rogan", "mindy kaling", "hannibal buress", "tiffany haddish", "jordan peele", "issa rae", "dave chappelle", "chris rock", "bill burr"];


// Display Gifs
function showGifs() {
    var people = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + people + "&api_key=upEXvN34I2m3g8hAYKlyFFVfyn9nG8dw&q=&limit=5&rating=G&lang=en";

    // Ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // Remove contents of gifs div
        $("#gifs").empty();

        var result = response.data;

        for (var i = 0; i < result.length; i++) {
            // div to hold gifs
            var gifDiv = $("<div>");
            // section to show rating
            var p = $("<p>").text("Rating:", result[i].rating);
            // gif holder using img tag
            var personImg = $("<img>");
            // set src attribute to personImg pulled from result item
            personImg.attr("src", result[i].images.fixed_height.url);

            gifDiv.append(p);
            gifDiv.append(personImg);
        }

        $("#gifs").prepend(gifDiv);

    })

}

// Displaying buttons
function renderBtns() {
    $("#btns").empty();

    // Generate buttons for each person in array
    for (var i = 0; i < funnyPpl.length; i++) {
        var topBtns = $("<button>");
        topBtns.addClass("people");
        topBtns.attr("data-name", funnyPpl[i]);
        topBtns.text(funnyPpl[i]);
        $("#btns").append(topBtns);
    }
}

// Add person button to array
$("#add-person").on("click", function(event) {
    event.preventDefault();
    var person = $("#user-input").val().trim();
    funnyPpl.push(person);

    renderBtns();
});

$(document).on("click", ".movie-btn", showGifs);

renderBtns();

});