$("a.smoothscroll[href^='#']").on("click", function() {
  const target = $(this).attr("href");
  return $('body, html').animate(
      {scrollTop: target === "#" ? 0 : $(target).offset().top},
      1000,
      target === "#main" ? 'easeOutBack' : "swing");
});
