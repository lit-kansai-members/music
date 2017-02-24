$("#mark").css({
  transform:`translateX(${ $("#loading img").offset().left - $("#mark").offset().left }px)`
});

$(window).on("load", () => $("body").addClass("loaded"));
