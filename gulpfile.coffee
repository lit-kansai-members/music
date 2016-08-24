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
    .pipe gulp.dest "docs/js/"

gulp.task "generate:scss", ->
  gulp.src "src/scss/*.scss"
    .pipe do $.sass
    .pipe $.concat "style.css"
    .pipe gulp.dest "docs/css/"

gulp.task "markdown", ["youtube"], ->
  gulp.src "./tmp/*.md"
    .pipe do $.markdown
    .pipe gulp.dest "./tmp"

gulp.task "youtube", ->
  gulp.src "./*.md"
    .pipe $.replace /\[YouTube\]\(\/\/youtu\.be\/([\w-]+)\)/g,
      '\n<div class="youtube">
      <iframe src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>
      </div>\n'
    .pipe gulp.dest "./tmp"

gulp.task "clean", ->
  del.sync "docs/*"
