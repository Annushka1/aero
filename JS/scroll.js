$(window).scroll(function () { // Когда страница прокручивается
  var scrTop = $(window).scrollTop();
    if(scrTop>$('.numb-700').offset().top - $(window).height()  ) {
        numAnimate();
    }
});
function numAnimate () {
    var number = 50;
    setInterval(function () {
        number=number + 50;
        if (number<=701) { $('.numb-700').text(number); };
    }, 100);
};

// $(window).scroll(function () { // Когда страница прокручивается
//   var scrTop = $(window).scrollTop();
//     if(scrTop>$('.numb-3000').offset().top - $(window).height()  ) {
//         numAnimate();
//     }
// });
// function numAnimate () {
//     var number = 500;
//     setInterval(function () {
//         number=number + 500;
//         if (number<=3000) { $('.numb-3000').text(number); };
//     }, 100);
// };