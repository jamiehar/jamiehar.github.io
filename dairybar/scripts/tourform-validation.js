$(document).ready(function() {
  $("#tour-form").on("submit", function() {
    var formValid = true;

    var nameValid = $("#name").prop("validity").valid;
    if(nameValid) {
      $("#name-feedback").addClass("hidden");
    } else {
      $("#name-feedback").removeClass("hidden");
      formValid = false;
    }

    var emailValid = $("#email-address").prop("validity").valid;
    if(emailValid) {
      $("#email-feedback").addClass("hidden");
    } else {
      $("#email-feedback").removeClass("hidden");
      formValid = false;
    }

    return formValid;
  });
});
