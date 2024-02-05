$(document).ready(function(){

/* Mobile HEADER______________________________ */

  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".mognb").slideToggle();
  });

  $(window).resize(function(){

    let w = $(window).width();

    if(w>768){
      $(".mognb").removeAttr("style");
      $(".trigger").removeClass("active");
    }
  });
});