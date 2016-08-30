campCount   = 0
$bg         = document.getElementById "bg"
preH3Bottom = null
html        = ""

$.get "./backgrounds.json", (backgrounds) ->
  bg = ->
    $this = $ this
    headingOffset = $this.position().top
    
    if preH3Bottom?
      background = backgrounds[campCount]
      html += "<div class='#{
        unless background then "noimage" else ""
      }' style='#{
        if background then "background-image: url(#{background});" else ""
      }
      height: #{headingOffset - preH3Bottom}px;
      top: #{preH3Bottom}px'></div>"
      campCount++

    preH3Bottom = if this.tagName is "H3" then headingOffset +  $this.outerHeight true

  $("#main h2, #main h3").each bg
  bg.call $("footer")[0]

  $bg.innerHTML = html
