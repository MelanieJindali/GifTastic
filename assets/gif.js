$(document).ready(function () {

  // Creating an array for topics var
  var searches = ["tom segura", "joe rogan", "mindy kaling", "hannibal buress", "tiffany haddish", "jordan peele", "issa rae", "dave chappelle", "chris rock", "bill burr"];


  // Display Gifs
  function showGifs() {
    var searchTerm = $(this).attr("data-name");
    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=upEXvN34I2m3g8hAYKlyFFVfyn9nG8dw&limit=10&rating=G`;

    // Ajax call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      // Remove contents of gifs div
      $("#gifs").empty();

      var result = response.data;

      for (var i = 0; i < result.length; i++) {

        // div to hold gifs
        var gifDiv = $("<div>");

        // section to show rating
        var p = $("<p>").text("Rating: " + result[i].rating);

        // gif holder using img tag
        var image = $("<img>");

        // set src attribute to image pulled from result item
        image.attr("src", result[i].images.fixed_height_still.url);
        // add attributes for sill and animate gif states
        image.attr("data-still", result[i].images.fixed_height_still.url);
        image.attr("data-state", "still");
        image.attr("data-animate", result[i].images.fixed_height.url);
        image.addClass("gif-state");

        $(".gif-state").on("click", function () {
          var state = $(this).attr("data-state");

          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });

        gifDiv.append(p);
        gifDiv.append(image);

        $("#gifs").append(gifDiv);

        // Apply function to gifs that are appended to div
        $(".gif-state").on("click", function () {
          var state = $(this).attr("data-state");

          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });

      }
    });

  }

  // Displaying buttons
  function renderBtns() {
    $("#btns").empty();

    // Generate buttons for each person in array
    for (var i = 0; i < searches.length; i++) {
      var topBtns = $("<button>");
      topBtns.addClass("search");
      topBtns.attr("data-name", searches[i]);
      topBtns.text(searches[i]);
      $("#btns").append(topBtns);
    }
  }

  // Add person button to array
  $("#add-btn").on("click", function (event) {
    event.preventDefault();
    var newTerm = $("#user-input").val().trim().toLowerCase();
    searches.push(newTerm);

    $("#user-input").val("");

    renderBtns();
  });

  $(document).on("click", ".search", showGifs);

  renderBtns();

});