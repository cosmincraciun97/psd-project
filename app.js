// Fixed Navbar
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 95 && !$(".main-nav").hasClass("fixed")) {
    $(".main-nav").addClass("fixed");
  } else if ($(window).scrollTop() < 95 && $(".main-nav").hasClass("fixed")) {
    $(".main-nav").removeClass("fixed");
  }
});
// Accordion
$(".acc h3").click(function () {
  $(this).next(".content").slideToggle();
  $(this).parent().toggleClass("active");
  $(this).parent().siblings().children(".content").slideUp();
  $(this).parent().siblings().removeClass("active");
});

// Mobile Navigation

$(document).ready(function () {
  $(".cross").hide();
  $(".menu").hide();
  $(".hamburger").click(function () {
    $(".menu").slideToggle("fast", function () {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function () {
    $(".menu").slideToggle("fast", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });
});
