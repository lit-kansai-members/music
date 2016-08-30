(function() {
  var $bg, backgrounds, bg, campCount, html, preH3Bottom;

  backgrounds = ["https://life-is-tech.com/materials/images/desktop_summer2016_blue.png", "https://life-is-tech.com/materials/images/desktop_spring2016_web.png", "", "https://life-is-tech.com/materials/images/desktop_xmas2015_night.jpg", "https://life-is-tech.com/materials/images/summer2015-blue.jpg", "", "", "", "https://life-is-tech.com/materials/images/spring2015-blue.png", "", "https://life-is-tech.com/materials/images/summer2014-blue.png", "", "", "", "", "", "", ""];

  campCount = 0;

  $bg = document.getElementById("bg");

  preH3Bottom = null;

  html = "";

  bg = function() {
    var $this, background, headingOffset;
    $this = $(this);
    headingOffset = $this.position().top;
    if (preH3Bottom != null) {
      background = backgrounds[campCount];
      html += "<div class='" + (!background ? "noimage" : "") + "' style='" + (background ? "background-image: url(" + background + ");" : "") + " height: " + (headingOffset - preH3Bottom) + "px; top: " + preH3Bottom + "px'></div>";
      campCount++;
    }
    return preH3Bottom = this.tagName === "H3" ? headingOffset + $this.outerHeight(true) : void 0;
  };

  $("#main h2, #main h3").each(bg);

  bg.call($("footer")[0]);

  $bg.innerHTML = html;

}).call(this);

(function() {
  $(".colorful, h2").each(function() {
    return this.innerHTML = this.innerText.replace(/./g, "<span>$&</span>");
  });

}).call(this);
