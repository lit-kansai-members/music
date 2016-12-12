$headings =
  year: $ "#main h2"
  camp: $ "#main h3"

$scroller = $ "html, body"

$container = $ "#navigations"

$window = $ window

waitMouseMove = waitTransition = null


html = ""

for $h, i in $ "#main h2, #main h3"
  if $h.tagName is "H2"
    if i isnt 0
      html +="  </ul>\n</li>\n"
    t = $h.innerText
    tn = parseInt t
    html += """
    <li class="year" data-year="#{
      unless isNaN tn
        "'#{tn.toString().slice -2}"
      else
        ""
      }">
      <div class="inneryear">#{t}</div>
      <ul class="outerCamp">\n
    """
  else if $h.tagName is "H3"
    html += "    <li class='camp'>#{$h.innerText}</li>\n"

html += "  </ul>\n</li>"

headingTops = for el, i in $headings.year
  $(el).position().top

open = (index)->
  $this = if typeof index is "number"
    do close
    $container
    .find ".year:nth-child(#{index + 1})"
    .addClass "opened"
  else
    $ this

  w = do $this
    .children ".inneryear"
    .innerWidth

  $this
  .css width: w
  .data "autoWidth", w

close = (e)->
  console.log "closeyear"
  clearTimeout waitTransition
  $this = if e?
    $ this
  else
    $container
    .find ".year.opened"
    .removeClass "opened"

  unless $this.hasClass "opened"
    $this.css width: 0

$container.html html
.on "mouseenter", ".year", open
.on "mouseleave", ".year", close
.on "mouseenter", ".inneryear, .outerCamp", ->
  console.log "enter"
  clearTimeout waitMouseMove
  clearTimeout waitTransition
  $outer = $(this).closest ".year"
  $outerCamp = $outer.children ".outerCamp"
  $lastCamp = $outerCamp.children ":last"
  height = $lastCamp.position().top + do $lastCamp.innerHeight

  $outer.css width: do $outerCamp.innerWidth
  t = $outer.css "transition-duration"
  
  waitTransition = setTimeout ->
    $outerCamp.css
      visibility: "visible"
      height: height
  , parseFloat(t) * 1000

.on "mouseleave", ".inneryear, .outerCamp", ->
  clearTimeout waitTransition
  waitMouseMove = setTimeout =>
    console.log "leave"
    $outer = $(this).closest ".year"
    $outerCamp = $outer.children ".outerCamp"
    
    t = $outerCamp
    .css height: 0
    .css "transition-duration"

    waitTransition = setTimeout ->
      $outerCamp.css visibility: "hidden"
      if $outer.is ":hover, .opened"
        $outer.css width: $outer.data "autoWidth"

      console.log "hide outerCamp"
    , parseFloat(t) * 1000
  ,100

.on "click", "li", ->
  target = if this.classList.contains "year" then "year" else "camp"
  index = $container.find "li.#{target}"
  .index this
  top = $headings[target]
  .eq index
  .offset()
  .top
  $scroller.animate scrollTop: top, 200
  no

$window.on "scroll", (e)->
  seeing = null
  for top, i in headingTops
    if top <= do $window.scrollTop - do $window.width / 2
      seeing = i

  if seeing?
    open seeing
  else
    do close
