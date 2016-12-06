"use strict"
iframe = unless process.argv.includes("--noyoutube") or process.argv.includes("-n")
    '<iframe data-src="https://www.youtube.com/embed/$1" class="lazyload"
    frameborder="0" allowfullscreen></iframe>'
  else
    ""

gulp        =    require "gulp"
$           = do require "gulp-load-plugins"
rimraf      =    require "rimraf"
browserSync =    require "browser-sync"
fs          =    require "fs"

gulp.task "generate", ["clean","generate:html", "generate:coffee",
  "generate:scss", "images"]

gulp.task "generate:html", ["markdown", "chuiten", "backgrounds"], ->
  gulp.src [
    './src/html/header.html'
    './tmp/index.html'
    './src/html/footer1.html'
    './tmp/chuiten.txt'
    './tmp/backgrounds.txt'
    './src/html/footer2.html'
  ]
    .pipe $.concat "index.html"
    .pipe gulp.dest "./pages"

gulp.task "generate:coffee", ->
  gulp.src "src/coffee/*.coffee"
    .pipe do $.coffee
    .pipe $.concat "script.js"
    .pipe gulp.dest "pages/js/"

gulp.task "generate:scss", ->
  gulp.src "src/scss/*.scss"
    .pipe do $.sass
    .pipe $.concat "style.css"
    .pipe gulp.dest "pages/css/"

gulp.task "markdown", ["youtube"], ->
  gulp.src "./tmp/*.md"
    .pipe do $.markdown
    .pipe $.replace /(['"])注意点\/(.+).md/, '$1#$2.html'
    .pipe gulp.dest "./tmp"

gulp.task "youtube", ->
  gulp.src "./*.md"
    .pipe $.replace /\[YouTube\]\(\/\/youtu\.be\/([\w-]+)\)/g,
      '\n<div class="youtube">\n' +
      iframe +
      '\n</div>\n'
    .pipe gulp.dest "./tmp"

gulp.task "backgrounds", ->
  gulp.src "./res/backgrounds.txt"
    .pipe $.replace /#.*/g, ""
    .pipe $.replace /[ \t]/g, ""
    .pipe $.wrapper
      header: '<script type="text/x-backgrounds-data" id="backgrounds">'
      footer: '</script>'
    .pipe gulp.dest "./tmp"

gulp.task "chuiten", ->
  gulp.src "./注意点/*.md"
    .pipe do $.markdown
    .pipe $.wrapper
      header: '<div class="chuiten" id="${filename}">'
      footer: '</div>'
    .pipe $.concat "chuiten.txt"
    .pipe gulp.dest "./tmp"

gulp.task "images", ->
  gulp.src "res/img/**/*"
    .pipe gulp.dest "pages/img/"

gulp.task "clean", -> rimraf.sync "pages/**/*"

gulp.task "generate:development", ["generate"], ->
  browserSync
    server:
      baseDir: "pages"
    port: 8082
  
  gulp.watch "pages/**/*", -> do browserSync.reload
  gulp.watch ["./*.md", "./src/html/*.html"], ["generate:html"]
  gulp.watch "./src/coffee/*.coffee", ["generate:coffee"]
  gulp.watch "./src/scss/*.scss", ["generate:scss"]
