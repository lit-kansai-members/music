"use strict"

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

gulp.task "generate:html", ["markdown", "chuiten"], ->
  gulp.src [
    './src/html/header1.html'
    './tmp/navigation.html'
    './src/html/header2.html'
    './tmp/index.html'
    './src/html/footer1.html'
    './tmp/chuiten.txt'
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
    bgs = fs.readFileSync "./res/backgrounds.txt"
      .toString()
      .replace /#.*$/gm, ""
      .replace /[ \t]/g, ""
      .split "\n"
    bgcount = 0
    nav = """<li class="year" data-year="↑">
              <div class="inneryear">TOP</div>
            </li>"""
    yearTagOpened = false

    res = fs.readFileSync "./index.md"
      .toString()
      .replace /^##(#?)([^#\n]+)\n((?:(?:#{4,}[^\n]+|[^#\n]*)\n)*)/gm, (match, isYear, name, body)->
        id = name.toLowerCase().replace(/[!-/:-@¥[-`{-~\s]/g, "-")
        isYear = isYear is ""
        str = """<h#{if isYear then "2" else "3"} id=#{id}>
                  <a href="##{id}">#{name}</a>
                </h#{if isYear then "2" else "3"}>"""
        if isYear
          if yearTagOpened
            nav +="  </ul>\n</li>\n"
          yearTagOpened = true
          year = parseInt name
          nav += """
            <li class="year" data-year="#{
              unless isNaN year
                "'#{year.toString().slice -2}"
              else
                "★"
              }">
              <div class="inneryear">#{name}</div>
              <ul class="outerCamp">\n
            """

          return str + body
        else
          nav += "    <li class='camp'>#{name}</li>\n"
          bg = bgs[bgcount++]
          return str +
          """
          <div class="pallalax">
            <img src="#{bg or "./img/backgorunds/lifeistech-logo.png"}"
              class="background#{bg ? "" : " noimage"}">
          #{
          body.replace /####([^#\n]+)\n(([^#][^#\n]+\n)*)/g, (match, song, body) ->
            result = /\[YouTube\]\((\/\/youtu\.be\/([\w-]+))\) {0,2}/.exec body
            body = body.replace /\[YouTube\]\((\/\/youtu\.be\/([\w-]+))\) {0,2}/, ""
            [author, title] = song.split(" - ")

            youtube = if result
              fs.readFileSync "src/html/youtube.html"
              .toString()
              .replace /{url}/g, result[1]
              .replace /{id}/g, result[2]
            else
              ""

            fs.readFileSync "src/html/song.html"
              .toString()
              .replace /{youtube}/, youtube
              .replace /{title}/, title
              .replace /{author}/, author
              .replace /{body}/, body
          }</div>""".replace(/\n\s+/g, "\n")
      nav += """</ul>\n</li>"""
      fs.writeFileSync("./tmp/navigation.html", nav)
      fs.writeFileSync "./tmp/index.md", res

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
