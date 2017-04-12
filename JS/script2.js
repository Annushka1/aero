  $("#getting-started")
  .countdown("2017/08/30", function(event) {
    $(this).text(
      event.strftime('%D дней %H часов %M минут %S секунд')
    );
  });