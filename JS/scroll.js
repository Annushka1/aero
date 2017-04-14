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

var updownElem = document.getElementById('updown');

    var pageYLabel = 0;

    updownElem.onclick = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;

      switch (this.className) {
        case 'up':
          pageYLabel = pageY;
          window.scrollTo(0, 0);
          this.className = 'down';
          break;

        case 'down':
          window.scrollTo(0, pageYLabel);
          this.className = 'up';
      }

    }

    window.onscroll = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;
      var innerHeight = document.documentElement.clientHeight;

      switch (updownElem.className) {
        case '':
          if (pageY > innerHeight) {
            updownElem.className = 'up';
          }
          break;

        case 'up':
          if (pageY < innerHeight) {
            updownElem.className = '';
          }
          break;

        case 'down':
          if (pageY > innerHeight) {
            updownElem.className = 'up';
          }
          break;

      }
    }