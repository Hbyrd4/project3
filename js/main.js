(function () {

    var controller = new ScrollMagic.Controller({
              globalSceneOptions: {
                  triggerHook: 'onLeave',
                  duration: "0%"
              }
      });
       var slides = document.querySelectorAll("section.panel");
  
      for (var i=0; i<slides.length; i++) {
          var scene = new ScrollMagic.Scene({
              triggerElement: slides[i]
          })
          .setPin(slides[i], {pushFollowers: false})
          // .addIndicators() 
          .addTo(controller);
      }
      
  
  }())

  function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }