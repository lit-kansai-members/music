"use strict"

gulp    =    require "gulp"
$       = do require "gulp-load-plugins"
del     =    require "del"

gulp.task "generate", ["clean","generate:html"]

gulp.task "generate:html", ["markdown"], ->
  gulp.src [
    './src/html/header.html'
    './tmp/index.html'
    './src/html/footer.html'
  ]
    .pipe $.concat "index.html"
    .pipe gulp.dest "./docs"

gulp.task "markdown", ->
  gulp.src "./*.md"
    .pipe do $.markdown
    .pipe gulp.dest "./tmp"

gulp.task "clean", ->
  del.sync "docs/*"