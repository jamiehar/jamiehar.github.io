$(document).ready(function(){
  var isHourHidden=true;
  $("#fall-hours-button").click(function(){
    if (isHourHidden){
      $("#fall-hours").removeClass("hidden");
      $("#fallCaret").text("▲")
      isHourHidden=false;
    }else{
      $("#fall-hours").addClass("hidden");
      $("#fallCaret").text("▼")
      isHourHidden=true;
    }
  });

  $("#spring-hours-button").click(function(){
    if (isHourHidden){
      $("#spring-hours").removeClass("hidden");
      $("#springCaret").text("▲")
      isHourHidden=false;
    }else{
      $("#spring-hours").addClass("hidden");
      $("#springCaret").text("▼")
      isHourHidden=true;
    }
  })
});
