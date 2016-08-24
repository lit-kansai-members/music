"use strict"

gulp    =    require "gulp"
$       = do require "gulp-load-plugins"
del     =    require "del"

gulp.task "generate", ["clean","generate:html", "generate:coffee", "generate:scss"]

gulp.task "generate:html", ["markdown"], ->
  gulp.src [
    './src/html/header.html'
    './tmp/index.html'
    './src/html/footer.html'
  ]
    .pipe $.concat "index.html"
    .pipe gulp.dest "./docs"

gulp.task "generate:coffee", ->
  gulp.src "src/coffee/*.coffee"
    .pipe do $.coffee
    .pipe $.concat "script.js"
    .pipe $.dest "docs/js/"

gulp.task "generate:scss", ->
  gulp.src "src/scss/*.scss"
    .pipe do $.sass
    .pipe $.concat "style.css"
    .pipe $.dest "docs/css/"

gulp.task "markdown", ->
  gulp.src "./*.md"
    .pipe do $.markdown
    .pipe gulp.dest "./tmp"

gulp.task "clean", ->
  del.sync "docs/*"
