$ ".youtube"
.on "click", ->
  $this = $ this
  $this.append """
  <iframe 
    src="http://www.youtube.com/embed/#{$this.data "youtube-id"}?autoplay=1"
    frameborder="0"
    allowfullscreen
    >
  """
