"use strict";

const gulp        =    require("gulp");
const $           = require("gulp-load-plugins")();
const rimraf      =    require("rimraf");
const browserSync =    require("browser-sync");
const fs          =    require("fs");


gulp.task("generate", ["clean","generate:html", "generate:js",
  "generate:scss", "images"], () =>
  gulp.src("src/gh-pages_README.md")
    .pipe($.rename("README.md"))
    .pipe(gulp.dest("build"))
);

gulp.task("generate:html", ["markdown", "chuiten"], () =>
  gulp.src([
    './src/html/header1.html',
    './tmp/navigation.html',
    './src/html/header2.html',
    './tmp/index.html',
    './src/html/footer1.html',
    './tmp/chuiten.txt',
    './src/html/footer2.html'
  ])
    .pipe($.concat("index.html"))
    .pipe(gulp.dest("./build"))
);

gulp.task("generate:js", () =>
  gulp.src("src/js/*.js")
    .pipe($.wrapper({header: '{', footer: '}'}))
    .pipe($.concat("script.js"))
    .pipe(gulp.dest("build/js/"))
);

gulp.task("generate:scss", () =>
  gulp.src("src/scss/*.scss")
    .pipe($.sass())
    .pipe($.concat("style.css"))
    .pipe(gulp.dest("build/css/"))
);

gulp.task("markdown", ["youtube"], () =>
  gulp.src("./tmp/index.md")
    .pipe($.replace(/\[(.*)\]\(注意点\/(.+).md\)/g, '<a href="#$2" class="open-modal">$1</a>'))
    .pipe($.markdown())
    .pipe(gulp.dest("./tmp"))
);

gulp.task("youtube", function() {
    const bgs = fs.readFileSync("./res/backgrounds.txt")
      .toString()
      .replace(/#.*$/gm, "")
      .replace(/[ \t]/g, "")
      .split("\n");
    let bgcount = 0;
    let nav = `<li class="year" data-year="↑">
  <div class="inneryear">TOP</div>
</li>`;
    let yearTagOpened = false;

    const res = fs.readFileSync("./index.md")
      .toString()
      .replace(/^##(#?)([^#\n]+)\n((?:(?:#{4,}[^\n]+|[^#\n]*)\n)*)/gm, function(match, isYear, name, body){
        const id = name.toLowerCase().replace(/[!-/:-@¥[-`{-~\s]/g, "-");
        isYear = isYear === "";
        const str = `<h${isYear ? "2" : "3"} id=${id}>
  <a href="#${id}">${name}</a>
</h${isYear ? "2" : "3"}>`;
        if (isYear) {
          if (yearTagOpened) {
            nav +="  </ul>\n</li>\n";
          }
          yearTagOpened = true;
          const year = parseInt(name);
          nav += `\
<li class="year" data-year="${
              !isNaN(year) ?
                `'${year.toString().slice(-2)}`
              :
                "★"
              }">
  <div class="inneryear">${name}</div>
  <ul class="outerCamp">\n\
`;

          return str + body;
        } else {
          nav += `    <li class='camp'>${name}</li>\n`;
          const bg = bgs[bgcount++];
          return str +
          `\
<div class="parallax">
  <img src="${bg || "./img/backgorunds/lifeistech-logo.png"}"
    class="background${bg ? "" : " noimage"}">
${
          body.replace(/####([^#\n]+)\n(([^#][^#\n]+\n)*)/g, function(match, song, body) {
            const result = /\[YouTube\]\((\/\/youtu\.be\/([\w-]+))\) {0,2}/.exec(body);
            body = body.replace(/\[YouTube\]\((\/\/youtu\.be\/([\w-]+))\) {0,2}/, "");
            const [author, title] = Array.from(song.split(" - "));

            const youtube = result ?
              fs.readFileSync("src/html/youtube.html")
              .toString()
              .replace(/{url}/g, result[1])
              .replace(/{id}/g, result[2])
            :
              "";

            return fs.readFileSync("src/html/song.html")
              .toString()
              .replace(/{youtube}/, youtube)
              .replace(/{title}/, title)
              .replace(/{author}/, author)
              .replace(/{body}/, body);
          })
          }</div>`.replace(/\n\s+/g, "\n");
        }
    });
    nav += "</ul>\n</li>";
    try{
    fs.mkdirSync("./tmp");
    } catch(o_O){
      console.log(o_O);
    }
    fs.writeFileSync("./tmp/navigation.html", nav);
    fs.writeFileSync("./tmp/index.md", res);
});

gulp.task("chuiten", function() {
  const template = fs.readFileSync("src/html/chuiten.html")
    .toString()
    .split("${contents}");

  return gulp.src("./注意点/*.md")
    .pipe($.markdown())
    .pipe($.rename({extname: ""}))
    .pipe($.wrapper({
      header: template[0],
      footer: template[1]}))
    .pipe($.concat("chuiten.txt"))
    .pipe(gulp.dest("./tmp"));
});

gulp.task("images", () =>
  gulp.src("res/img/**/*")
    .pipe(gulp.dest("build/img/"))
);

gulp.task("clean", () => rimraf.sync("build/**/*"));

gulp.task("generate:development", ["generate"], function() {
  browserSync({
    server: {
      baseDir: "build"
    },
    port: 8082
  });
  
  gulp.watch("build/**/*", () => browserSync.reload());
  gulp.watch(["./index.md", "./注意点/*.md", "./src/html/*.html"], ["generate:html"]);
  gulp.watch("./src/js/*.js", ["generate:js"]);
  return gulp.watch("./src/scss/*.scss", ["generate:scss"]);});
