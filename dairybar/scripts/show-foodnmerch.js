$(document).ready(function() {
    var merch_details = true;
  $("#foods").click(function() {
    if (merch_details) {
      $("#foodsmenu").removeClass("hidden");
      $("#downCaret1").text("▲");
      merch_details = false;
    } else {
      $("#foodsmenu").addClass("hidden");
      $("#downCaret1").text("▼");
      merch_details = true;
    }
  });
  $("#clothes").click(function() {
    if (merch_details) {
      $("#clothes-merchandise").removeClass("hidden");
      $("#downCaret2").text("▲");
      merch_details = false;
    } else {
      $("#clothes-merchandise").addClass("hidden");
      $("#downCaret2").text("▼");
      merch_details = true;
    }
  });
  $("#accessories").click(function() {
    if (merch_details) {
      $("#accessories-merchandise").removeClass("hidden");
      $("#downCaret3").text("▲");
      merch_details = false;
    } else {
      $("#accessories-merchandise").addClass("hidden");
      $("#downCaret3").text("▼");
      merch_details = true;
    }
  });
  $("#others").click(function() {
    if (merch_details) {
      $("#others-merchandise").removeClass("hidden");
      $("#downCaret4").text("▲");
      merch_details = false;
    } else {
      $("#others-merchandise").addClass("hidden");
      $("#downCaret4").text("▼");
      merch_details = true;
    }
  });
});
