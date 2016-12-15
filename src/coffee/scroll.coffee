$("a.smoothscroll[href^='#']").on "click", ->
  target = $(@).attr "href"
  $('body, html').animate
      scrollTop: if target is "#" then 0 else $(target).offset().top,
      1000,
      if target is "#main" then 'easeOutBack' else "swing"
