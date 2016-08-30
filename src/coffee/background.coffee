backgrounds = [
  "https://life-is-tech.com/materials/images/desktop_summer2016_blue.png" # '16 Summer
  "https://life-is-tech.com/materials/images/desktop_spring2016_web.png"  # '16 Spring
  ""                                                                      # '15 Coca-Cola
  "https://life-is-tech.com/materials/images/desktop_xmas2015_night.jpg"  # '15 Xmas
  "https://life-is-tech.com/materials/images/summer2015-blue.jpg"         # '15 Summer
  ""                                                                      # '15 YOSHIMOTO
  ""                                                                      # '15 伊豆
  ""                                                                      # '15 萩
  "https://life-is-tech.com/materials/images/spring2015-blue.png"         # '15 Spring
  ""                                                                      # '14 Xmas
  "https://life-is-tech.com/materials/images/summer2014-blue.png"         # '14 Summer
  ""                                                                      # '14 English
  ""                                                                      # '14 Spring
  ""                                                                      # '13 Xmas
  ""                                                                      # '13 Summer
  ""                                                                      # '13 Spring
  ""                                                                      # '12 Xmas
  ""                                                                      # '12 Summer
]

campCount   = 0
$bg         = document.getElementById "bg"
preH3Bottom = null
html        = ""

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
