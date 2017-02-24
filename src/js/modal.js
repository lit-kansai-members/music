$(".close-modal").on("click", function() {
  $("body").css({overflow: "auto"});
  $(".modal.open").removeClass("open");
  return false;
});

$(".open-modal").on("click", function() {
  $(this.getAttribute("href")).addClass("open");
  $("body").css({overflow: "hidden"});
  return false;
});
