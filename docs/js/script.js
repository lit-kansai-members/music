(function() {
  var background;

  background = ["https://life-is-tech.com/materials/images/desktop_summer2016_blue.png", "https://life-is-tech.com/materials/images/desktop_spring2016_web.png", "", "https://life-is-tech.com/materials/images/desktop_xmas2015_night.jpg", "https://life-is-tech.com/materials/images/summer2015-blue.jpg", "", "", "", "https://life-is-tech.com/materials/images/spring2015-blue.png", "", "https://life-is-tech.com/materials/images/summer2014-blue.png", "", "", "", "", "", "", ""];

  $(window).on("load", function() {
    var $bg, $preHeading, bg, campCount;
    campCount = 0;
    $bg = $("#background");
    $preHeading = null;
    bg = function() {
      var $heading, css, ref;
      $heading = $(this);
      if ($preHeading != null) {
        css = {};
        if ($preHeading.prop("tagName") === "H3") {
          css.backgroundImage = "url(" + ((ref = backgrounds[campCount]) != null ? ref : "https://life-is-tech.com/materials/images/lifeistech-logo.png") + ")";
          campCount++;
        }
        css.height = $heading.offset() - $preHeading.offset();
        return $("<div>").css(css).appendTo($bg);
      }
    };
    $("#main h2, #main h3").each(bg);
    return bg();
  });

}).call(this);
