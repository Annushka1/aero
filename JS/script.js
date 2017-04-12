$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    navText: false,
    margin: 15,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:500,
    autoplayHoverPause:true
   });

  $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
    });
    return false;

});


