$(document).ready(function() {
  $("#downCaretEquipment").text("▼");
  // When allergens is clicked
  $("#equipment").click(function () {
    // stores whether image is visible
    var equipmentVisibility = $("#equipmentList").is(':visible');
    // if it's not visible, show it
    if (equipmentVisibility == false) {
      $("#equipmentList").removeClass("hidden");
      $("#downCaretEquipment").text("▲");
    // if it is, hide it
    } else {
      $("#equipmentList").addClass("hidden");
      $("#downCaretEquipment").text("▼");
    }
  });
});
