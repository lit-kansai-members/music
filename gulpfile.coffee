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
