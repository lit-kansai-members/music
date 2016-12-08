$yearHeading = $ "#main h2"
$campHeading = $ "#main h3"

$container = $ "#navigations"

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

$container.html html
.on "mouseenter", ".year", ->
  $this = $ this
  w = do $this
    .children ".inneryear"
    .innerWidth

  $this.css width: w, right: w
    .addClass "opened"
.on "mouseleave", ".year", ->
  $ this
  .css width: 0, right: 0
  .removeClass "opened"
