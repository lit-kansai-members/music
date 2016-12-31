$ ".play"
.on "click", ->
  $ this
  .closest ".youtube"
  .append """
  <iframe 
    src="http://www.youtube.com/embed/#{this.dataset.youtubeId}?autoplay=1"
    frameborder="0"
    allowfullscreen
    >
  """
