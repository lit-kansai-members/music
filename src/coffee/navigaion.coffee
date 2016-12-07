$yearHeading = $ "#main h2"
$campHeading = $ "#main h3"

$container = $ "#navigations"

html = ""

for $h, i in $ "#main h2, #main h3"
  if $h.tagName is "H2"
    if i isnt 0
      html +="  </ul>\n</li>\n"
    html += """
    <li class="yaer">
      <div class="inneryear">#{$h.innerText}</div>
      <ul class="outerCamp">\n
    """
  else if $h.tagName is "H3"
    html += "    <li class='camp'>#{$h.innerText}</li>\n"

html += "  </ul>\n</li>"

$container.html html
