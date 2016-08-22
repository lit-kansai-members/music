"use strict";

var gulp    = require("gulp");
var $       = require("gulp-load-plugins")();

gulp.task("generate", ["generate:html"]);

gulp.task("generate:html", ["markdown"], function(){
  gulp.src([
    './src/html/header.html',
    './tmp/*.html',
    //'./tmp/index.html',
    './src/html/footer.html'
  ])
    .pipe($.concat("index.html"))
    .pipe(gulp.dest("./docs"));
});

gulp.task("markdown", function(){
  gulp.src("./*.md")
    .pipe($.markdown())
    .pipe(gulp.dest("./tmp"))
});
