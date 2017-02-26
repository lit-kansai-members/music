let i, waitTransition;
let $headings = {
  year: $("header, #main h2, footer"),
  camp: $("#main h3")
};

let $scroller = $("html, body");

let $container = $("#navigations");

let $window = $(window);

let waitMouseMove = waitTransition = null;

let headingTops = (() => {
  let result = [];
  for (i = 0; i < $headings.year.length; i++) {
    let el = $headings.year[i];
    result.push($(el).offset().top);
  }
  return result;
})();

headingTops.shift(0);


let close = function(e){
  $container
  .find(".year.opened")
  .removeClass("opened");
};

let open = function(index){
  close();
  $container
  .find(`.year:eq(${index})`)
  .addClass("opened")
};


$container
.on("mouseenter", ".inneryear, .outerCamp", function() {
  setTimeout(() => {
  clearTimeout(waitMouseMove);
  clearTimeout(waitTransition);
  let $outer = $(this).closest(".year");
  let $outerCamp = $outer.children(".outerCamp");
  if (!$outerCamp.length) {
    return;
  }
  let $lastCamp = $outerCamp.children(":last");
  let height = $lastCamp.position().top + $lastCamp.innerHeight();

  $outer.css({width: $outerCamp.innerWidth() + 2});
  let t = $outer.css("transition-duration");
  
  return waitTransition = setTimeout(() =>
    $outerCamp.css({
      visibility: "visible",
      height
    })
  
  , parseFloat(t) * 1000);
  },20)})
.on("mouseleave", ".inneryear, .outerCamp", function() {
  clearTimeout(waitTransition);
  waitMouseMove = setTimeout(() => {
    let $outer = $(this).closest(".year");
    let $outerCamp = $outer.children(".outerCamp");
    if (!$outerCamp.length) {
      return;
    }
    
    let t = $outerCamp
    .css({height: 0})
    .css({visibility: "hidden"})
    .css("transition-duration");

    waitTransition = setTimeout(() =>
      $outer.css({width: ""})
    , parseFloat(t) * 1000);
  }, 15);
})
.on("click", "li", function() {
  let target = this.classList.contains("year") ? "year" : "camp";
  let index = $container.find(`li.${target}`)
  .index(this);
  let { top } = $headings[target]
    .eq(index)
    .offset();
  $scroller.animate({scrollTop: top}, 200);
  return false;}).children(".year")
.each(function() {
  let $this = $(this);
  return $this.data("autoWidth",
    $this
    .children(".inneryear")
    .innerWidth()
  );
});



let opened = null;
$window.on("scroll", function(e){
  let scrollTop = $window.scrollTop();
  let height = $window.height();
  let seeing = headingTops.length;

  for (i = 0; i < headingTops.length; i++) {
    let top = headingTops[i];
    if ((top - height) >= scrollTop) {
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

let css = "";

Array.from($container.children(".year")).forEach((el, i) =>{
  const selector =`#navigations > .year:nth-child(${i + 1})`
  css += `
${selector}.opened, ${selector}:hover {
  width: ${$(el).children(".inneryear")[0].offsetWidth}px;
}

`
});

$(document.head).append($("<style>" + css + "</style>"));
