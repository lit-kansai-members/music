$body = $ "body"

$("a[href^=注意点]").each ->
  href = this.getAttribute "href"
  fileName = do href.split("/").pop().split(".").shift
  $.get "https://raw.githubusercontent.com/lit-kansai-members/music/master/" + href, (data)=>
    this.href = "#" + fileName
    console.log this
    $body.prepend """
    <div class="chuiten" id="#{fileName}">#{data.replace /\n/g, "<br>\n"}</div>
    """