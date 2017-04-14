$(document).ready(function(){

   $('.private-subtitle').on('click', function(){
      console.log('hello');
      $('.private-text').slideToggle();
    });


   $('.selector').spincrement(0, 100);


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


