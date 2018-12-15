$(document).ready(function() {
  $("#icecream-sandwich-form").on("submit", function() {
    var formIsValid = true;

    var nameIsValid = $("#nameOrderForm").prop("validity").valid;
    if(nameIsValid) {
      $("#nameError").addClass("hidden");
    } else {
      $("#nameError").removeClass("hidden");
      formIsValid = false;
    }

    var phoneIsValid = $("#phoneOrderForm").prop("validity").valid;
    if(phoneIsValid) {
      $("#phoneError").addClass("hidden");
    } else {
      $("#phoneError").removeClass("hidden");
      formIsValid = false;
    }

    var emailIsValid = $("#emailOrderForm").prop("validity").valid;
    if(emailIsValid) {
      $("#emailError").addClass("hidden");
    } else {
      $("#emailError").removeClass("hidden");
      formIsValid = false;
    }

    var quantityIsValid = $("#quantityOrderForm").prop("validity").valid;
    if(quantityIsValid) {
      $("#quantityError").addClass("hidden");
    } else {
      $("#quantityError").removeClass("hidden");
      formIsValid = false;
    }
    
    return formIsValid;
  });
});
