$("titre").each(function(index, element){
    var animation = TweenMax.to(this, 0.2, {
      className: '+= superShadow',
      marginTop: '-10px',
      marginBottom: '10px',
      ease: Power1.easeIn,
      paused:true
    });
    element.animation = animation;
  })
  
  
  $('titre').hover(function(){
   this.animation.play()
  }, function(){
   this.animation.reverse();
  })