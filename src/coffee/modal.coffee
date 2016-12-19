$(".close-modal").on "click", ->
  $("body").css overflow: "auto"
  $(".modal.open").removeClass "open"
  no

$(".open-modal").on "click", ->
  $(@getAttribute "href").addClass "open"
  $("body").css overflow: "hidden"
  no
