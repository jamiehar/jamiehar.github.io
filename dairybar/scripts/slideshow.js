$(document).ready(function() {
  var iceCreamLinks = [ // source links for each photo
    "https://www.instagram.com/p/BWnDMFlAbjZ/",
    "https://www.instagram.com/p/BXLr-cZhItK/",
    "https://www.instagram.com/p/BgrNFWsnurF/",
    "https://www.instagram.com/p/BmwasBiAN47/",
    "https://www.instagram.com/p/BmrTFyhloNm/",
  ];

  if ($(window).width()>700) { // desktop screen
    var iceCreamImages = [
      "images/icecream1.jpg",
      "images/icecream2.jpg",
      "images/icecream3.jpg",
      "images/icecream4.jpg",
      "images/icecream5.jpg",
    ];

    var currentIndex = 0;

    setInterval(function() {
      if (currentIndex <= iceCreamImages.length-2) {
        currentIndex+=1;
        $("#slideshowImage").attr("src", iceCreamImages[currentIndex]);
        $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
      } else {
        currentIndex=0;
        $("#slideshowImage").attr("src", iceCreamImages[currentIndex]);
        $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
      }
    }, 5000);

    $("#slideshowNext").click(function() {
      if (currentIndex <= iceCreamImages.length-2) {
        currentIndex+=1;
        $("#slideshowImage").attr("src", iceCreamImages[currentIndex]);
        $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
      } else {
        currentIndex=0;
        $("#slideshowImage").attr("src", iceCreamImages[currentIndex]);
        $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
      }
    });

    $("#slideshowBefore").click(function() {
      if (0 < currentIndex && currentIndex <= iceCreamImages.length) {
        currentIndex-=1;
        $("#slideshowImage").attr("src", iceCreamImages[currentIndex]);
        $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
      } else {
        currentIndex=iceCreamImages.length-1;
        $("#slideshowImage").attr("src", iceCreamImages[currentIndex]);
        $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
      }
    });

  } else { // mobile screen
      var iceCreamImages = [
        "images/icecream1-mobile.jpg",
        "images/icecream2-mobile.jpg",
        "images/icecream3-mobile.jpg",
        "images/icecream4-mobile.jpg",
        "images/icecream5-mobile.jpg",
      ];

      var currentIndex = 0;

      setInterval(function() {
        if (currentIndex <= iceCreamImages.length-2) {
          currentInpulldex+=1;up
          $("#slideshowImage").attr("src", iceCreamImages[currentIndex]);
          $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
        } else {
          currentIndex=0;
          $("#slideshowImage").attr("src", iceCreamImages[currentIndex]);
          $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
        }
      }, 5000);

      $("#slideshowNext").click(function() {
        if (currentIndex <= iceCreamImages.length-2) {
          currentIndex+=1;
          $("#slideshowImageMobile").attr("src", iceCreamImages[currentIndex]);
          $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
        } else {
          currentIndex=0;
          $("#slideshowImageMobile").attr("src", iceCreamImages[currentIndex]);
          $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
        }
      });

      $("#slideshowBefore").click(function() {
        if (0 < currentIndex && currentIndex <= iceCreamImages.length) {
          currentIndex-=1;
          $("#slideshowImageMobile").attr("src", iceCreamImages[currentIndex]);
          $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
        } else {
          currentIndex=iceCreamImages.length-1;
          $("#slideshowImageMobile").attr("src", iceCreamImages[currentIndex]);
          $("#slideshowSource").attr("href", iceCreamLinks[currentIndex]);
        }
      });
    }
});
