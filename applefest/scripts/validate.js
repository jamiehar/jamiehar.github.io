$(document).ready(function() {
  $("#showcaseyourphoto").on("submit", function() {
    var formValid = true; // true then submit, false then do not submit

    // Instagram handle
    var handleValid = $("#handle").prop("validity").valid
    if (handleValid) { // if handle is valid
      $("#handle").removeClass("empty-input"); // no default blue border
      $("#handle").removeClass("rederror"); // no error red border
      $("#handle").addClass("greenvalidate"); // add success green border
      $("#handle-error").addClass("hidden"); // hide error message
    } else { // else if handle is not valid
      formValid = false;
      $("#handle").removeClass("empty-input"); // no default blue border
      $("#handle").removeClass("greenvalidate"); // no success green border
      $("#handle").addClass("rederror"); // add error red border
      $("#handle-error").removeClass("hidden"); // show error message
    }

    // Link to Instagram photo
    var linkValid = $("#photolink").prop("validity").valid
    if (linkValid) {
      $("#photolink").removeClass("empty-input");
      $("#photolink").removeClass("rederror");
      $("#photolink").addClass("greenvalidate");
      $("#link-error").addClass("hidden");
    } else {
      formValid = false;
      $("#photolink").removeClass("empty-input");
      $("#photolink").removeClass("greenvalidate");
      $("#photolink").addClass("rederror");
      $("#link-error").removeClass("hidden");
    }

    // If you don't upload, do you consent ... ?
    var upldConsentValid = $("#upload-consent").prop("validity").valid
    if (upldConsentValid) {
      $("#upload-consent-error").addClass("hidden");
    } else {
      formValid = false;
      $("#upload-consent-error").removeClass("hidden");
    }

    // Do you consent to use ... ?
    var useConsentValid = $("#use-consent").prop("validity").valid
    if (useConsentValid) {
      $("#use-consent-error").addClass("hidden");
    } else {
      formValid = false;
      $("#use-consent-error").removeClass("hidden");
    }

    return formValid;
  });
});
