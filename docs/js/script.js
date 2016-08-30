(function() {
  var $bg, backgrounds, bg, campCount, preHeadingOffset, preHeadingTagName;

  backgrounds = ["https://life-is-tech.com/materials/images/desktop_summer2016_blue.png", "https://life-is-tech.com/materials/images/desktop_spring2016_web.png", "", "https://life-is-tech.com/materials/images/desktop_xmas2015_night.jpg", "https://life-is-tech.com/materials/images/summer2015-blue.jpg", "", "", "", "https://life-is-tech.com/materials/images/spring2015-blue.png", "", "https://life-is-tech.com/materials/images/summer2014-blue.png", "", "", "", "", "", "", ""];

  campCount = 0;

  $bg = $("#bg");

  preHeadingOffset = null;

  preHeadingTagName = null;

  bg = function() {
    var css, headingOffset, noimage;
    headingOffset = $(this).offset().top;
    if (preHeadingOffset != null) {
      css = {};
      if (preHeadingTagName === "H3") {
        if (backgrounds[campCount]) {
          css.backgroundImage = "url(" + backgrounds[campCount] + ")";
        } else {
          noimage = "noimage";
        }
        campCount++;
      }
      css.height = headingOffset - preHeadingOffset;
      $("<div>").css(css).appendTo($bg).addClass(noimage);
    }
    preHeadingOffset = headingOffset;
    return preHeadingTagName = this.tagName;
  };

  $("#main h2, #main h3").each(bg);

  bg.call($("footer")[0]);

}).call(this);

(function() {
  $(".colorful, h2").each(function() {
    return this.innerHTML = this.innerText.replace(/./g, "<span>$&</span>");
  });

}).call(this);
