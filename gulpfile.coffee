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
  "generate:scss", "images"], ->
  gulp.src "src/gh-pages_README.md"
    .pipe $.rename "README.md"
    .pipe gulp.dest "build"

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
    .pipe gulp.dest "./build"

gulp.task "generate:coffee", ->
  gulp.src "src/coffee/*.coffee"
    .pipe do $.coffee
    .pipe $.concat "script.js"
    .pipe gulp.dest "build/js/"

gulp.task "generate:scss", ->
  gulp.src "src/scss/*.scss"
    .pipe do $.sass
    .pipe $.concat "style.css"
    .pipe gulp.dest "build/css/"

gulp.task "markdown", ["youtube"], ->
  gulp.src "./tmp/index.md"
    .pipe $.replace /\[(.*)\]\(注意点\/(.+).md\)/g, '<a href="#$2" class="open-modal">$1</a>'
    .pipe do $.markdown
    .pipe gulp.dest "./tmp"

gulp.task "youtube", ->
  gulp.src "./index.md"
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
  template = fs.readFileSync "src/html/chuiten.html"
    .toString()
    .split "${contents}"

  gulp.src "./注意点/*.md"
    .pipe do $.markdown
    .pipe $.rename extname: ""
    .pipe $.wrapper
      header: template[0]
      footer: template[1]
    .pipe $.concat "chuiten.txt"
    .pipe gulp.dest "./tmp"

gulp.task "images", ->
  gulp.src "res/img/**/*"
    .pipe gulp.dest "build/img/"

gulp.task "clean", -> rimraf.sync "build/**/*"

gulp.task "generate:development", ["generate"], ->
  browserSync
    server:
      baseDir: "build"
    port: 8082
  
  gulp.watch "build/**/*", -> do browserSync.reload
  gulp.watch ["./index.md", "./注意点/*.md", "./src/html/*.html"], ["generate:html"]
  gulp.watch "./src/coffee/*.coffee", ["generate:coffee"]
  gulp.watch "./src/scss/*.scss", ["generate:scss"]
