$(document).ready(function() {
  $("#downCaretFlavors").text("▼");
  // When allergens is clicked
  $("#allergens").click(function () {
    // stores whether image is visible
    var allergensVisibility = $("#allergy-table").is(':visible');
    // if it's not visible, show it
    if (allergensVisibility == false) {
      $("#allergy-table").removeClass("hidden");
      $("#downCaretFlavors").text("▲");
    // if it is, hide it
    } else {
      $("#allergy-table").addClass("hidden");
      $("#downCaretFlavors").text("▼");
    }
  });
});
