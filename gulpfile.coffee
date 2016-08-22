"use strict"

gulp    =    require "gulp"
$       = do require "gulp-load-plugins"

gulp.task "generate", ["generate:html"]

gulp.task "generate:html", ["markdown"], ->
  gulp.src [
    './src/html/header.html',
    './tmp/*.html',
    #'./tmp/index.html',
    './src/html/footer.html'
  ]
    .pipe $.concat "index.html"
    .pipe gulp.dest "./docs"

gulp.task "markdown", ->
  gulp.src "./*.md"
    .pipe do $.markdown
    .pipe gulp.dest "./tmp"
