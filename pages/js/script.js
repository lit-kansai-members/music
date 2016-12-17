(function() {
  var $bg, backgrounds, bg, campCount, html, preH3Bottom;

  campCount = 0;

  $bg = document.getElementById("bg");

  preH3Bottom = null;

  html = "";

  backgrounds = $("#backgrounds").html().split("\n");

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

(function() {
  var $mark, $scroller, markLeft;

  $scroller = $("header > a");

  $mark = $("#mark");

  markLeft = $mark.position().left;

  $mark.css({
    left: "50%",
    transform: "translateX(-50%)"
  });

  $(window).on("load", function() {
    return $("#loading").fadeOut("fast").promise().then(function() {
      $mark.animate({
        left: markLeft,
        transform: "translateX(0)"
      }, 1000, function() {
        return $mark.css({
          left: "auto"
        });
      });
      return $("#logo").animate({
        transform: "translateX(0)",
        opacity: 1
      }, 1000);
    }).then(function() {
      return $("h1 > span").animate({
        opacity: 1
      }, 1000);
    }).then(function() {
      return setTimeout(function() {
        $("body").css({
          overflow: "auto"
        });
        $scroller.css({
          display: "block"
        });
        return setInterval(function() {
          return $scroller.toggleClass("show");
        }, 1000);
      }, 0);
    });
  });

}).call(this);

(function() {
  $(".close-modal").on("click", function() {
    $("body").css({
      overflow: "auto"
    });
    $(".modal.open").removeClass("open");
    return false;
  });

  $(".open-modal").on("click", function() {
    $(this.getAttribute("href")).addClass("open");
    $("body").css({
      overflow: "hidden"
    });
    return false;
  });

}).call(this);

(function() {
  var $container, $h, $headings, $scroller, $window, close, el, headingTops, html, i, j, len, open, opened, ref, t, tn, waitMouseMove, waitTransition;

  $headings = {
    year: $("header, #main h2, footer"),
    camp: $("#main h3")
  };

  $scroller = $("html, body");

  $container = $("#navigations");

  $window = $(window);

  waitMouseMove = waitTransition = null;

  html = "<li class=\"year\" data-year=\"↑\">\n  <div class=\"inneryear\">TOP</div>\n</li>";

  ref = $("#main h2, #main h3");
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    $h = ref[i];
    if ($h.tagName === "H2") {
      if (i !== 0) {
        html += "  </ul>\n</li>\n";
      }
      t = $h.innerText;
      tn = parseInt(t);
      html += "<li class=\"year\" data-year=\"" + (!isNaN(tn) ? "'" + (tn.toString().slice(-2)) : "★") + "\">\n  <div class=\"inneryear\">" + t + "</div>\n  <ul class=\"outerCamp\">\n";
    } else if ($h.tagName === "H3") {
      html += "    <li class='camp'>" + $h.innerText + "</li>\n";
    }
  }

  html += "</ul>\n</li>";

  headingTops = (function() {
    var k, len1, ref1, results;
    ref1 = $headings.year;
    results = [];
    for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
      el = ref1[i];
      results.push($(el).offset().top);
    }
    return results;
  })();

  headingTops.shift(0);

  open = function(index) {
    var $this;
    $this = typeof index === "number" ? (close(), $container.find(".year:eq(" + index + ")").addClass("opened")) : $(this).data("hover", true);
    if (!$this.width()) {
      return $this.css({
        width: $this.data("autoWidth")
      });
    }
  };

  close = function(e) {
    var $this;
    $this = e != null ? $(this).data("hover", false) : $container.find(".year.opened").removeClass("opened");
    if (!($this.hasClass("opened") || $this.data("hover"))) {
      return $this.css({
        width: 0
      }).children(".outerCamp").css({
        visibility: "hidden"
      });
    }
  };

  $container.html(html).on("mouseenter", ".year", open).on("mouseleave", ".year", close).on("mouseenter", ".inneryear, .outerCamp", function() {
    var $lastCamp, $outer, $outerCamp, height;
    clearTimeout(waitMouseMove);
    clearTimeout(waitTransition);
    $outer = $(this).closest(".year");
    $outerCamp = $outer.children(".outerCamp");
    if (!$outerCamp.length) {
      return;
    }
    $lastCamp = $outerCamp.children(":last");
    height = $lastCamp.position().top + $lastCamp.innerHeight();
    $outer.css({
      width: $outerCamp.innerWidth() + 2
    });
    t = $outer.css("transition-duration");
    return waitTransition = setTimeout(function() {
      return $outerCamp.css({
        visibility: "visible",
        height: height
      });
    }, parseFloat(t) * 1000);
  }).on("mouseleave", ".inneryear, .outerCamp", function() {
    clearTimeout(waitTransition);
    return waitMouseMove = setTimeout((function(_this) {
      return function() {
        var $outer, $outerCamp;
        $outer = $(_this).closest(".year");
        $outerCamp = $outer.children(".outerCamp");
        if (!$outerCamp.length) {
          return;
        }
        t = $outerCamp.css({
          height: 0
        }).css({
          visibility: "hidden"
        }).css("transition-duration");
        return waitTransition = setTimeout(function() {
          if ($outer.is(":hover, .opened")) {
            return $outer.css({
              width: $outer.data("autoWidth")
            });
          }
        }, parseFloat(t) * 1000);
      };
    })(this), 15);
  }).on("click", "li", function() {
    var index, target, top;
    target = this.classList.contains("year") ? "year" : "camp";
    index = $container.find("li." + target).index(this);
    top = $headings[target].eq(index).offset().top;
    $scroller.animate({
      scrollTop: top
    }, 200);
    return false;
  }).children(".year").each(function() {
    var $this;
    $this = $(this);
    return $this.data("autoWidth", $this.children(".inneryear").innerWidth());
  });

  opened = null;

  $window.on("scroll", function(e) {
    var height, k, len1, scrollTop, seeing, top;
    scrollTop = $window.scrollTop();
    height = $window.height();
    seeing = headingTops.length;
    for (i = k = 0, len1 = headingTops.length; k < len1; i = ++k) {
      top = headingTops[i];
      if (top - height >= scrollTop) {
        seeing = i;
        break;
      }
    }
    if (seeing !== opened) {
      open(seeing);
    }
    return opened = seeing;
  });

  $window.trigger("scroll");

}).call(this);

(function() {
  $("a.smoothscroll[href^='#']").on("click", function() {
    var target;
    target = $(this).attr("href");
    return $('body, html').animate({
      scrollTop: target === "#" ? 0 : $(target).offset().top
    }, 1000, target === "#main" ? 'easeOutBack' : "swing");
  });

}).call(this);
