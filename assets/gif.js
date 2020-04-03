$(document).ready(function() {

// Creating an array for topics var
var funnyPpl = ["tom segura", "joe rogan", "mindy kaling", "hannibal buress", "tiffany haddish", "jordan peele", "issa rae", "dave chappelle", "chris rock", "bill burr"];

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
renderBtns();

});