$(document).ready(function(){
  
    var controller = new ScrollMagic.Controller();
    
    

    $('.project').each(function(){

      var ourScene = new ScrollMagic.Scene({
        triggerElement:this,
        //duration:900,
        triggerHook:.7
    })
    .setClassToggle(this,'fade-in')
  
    .addTo(controller);

    })
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  