

// hamburger script
// **** Starts ****

var type = new Typed(".tpy_Eff", {
  strings: ["CODER", "FRONT-END DEVLOPER", " WEB DESIGNER", "FIGMA DESIGNER"],
  showCursor: true,
  loop: true,
  smartBackspace: true,
  typeSpeed: 100,
  backSpeed: 100,
});

$("#hm").click(function () {
  $(".txa").css("left", "0");
  $("#i").removeClass("fa-bars");
  $("#i").toggleClass("fa-x");
  $('#txa').css('left', '-100%')
  $("#i").addClass("fa-bars");
});

$(".a").click(function () {
  $(".txa").css("left", "-100%");
  $("#i").removeClass("fa-x");
  $("#i").addClass("fa-bars");
});

// **** Ends ****

// sticky nav
// **** Starts ****

$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $("#nav").addClass("sticky");
  }

  if ($(window).scrollTop() < 51) {
    $("#nav").removeClass("sticky");
  }
});
// **** End ****
