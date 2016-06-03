console.log("jq loaded");
$(function() {

var ball = $(".ball")


$(".button-red").click(function() {
    ball.css("background","red");
  });

$(".button-blue").click(function() {
    ball.css("background","blue");
  });

$(".button-green").click(function() {
    ball.css("background","green");
  });

$(".button-hide").click(function() {
    ball.toggleClass("hidden");
  });


// $(".ball").draggable();
//
  $(".top").click(function() {
      ball.animate({top:"-=92vh"}, 500);
  });

  $(".bottom").click(function() {
      ball.animate({top:"+=92vh"}, 500);
  });

  $(".left").click(function() {
      ball.animate({left:"-=93.2vw"}, 500);
  });

  $(".right").click(function() {
      ball.animate({left:"+=93.2vw"}, 500);
  });

});
