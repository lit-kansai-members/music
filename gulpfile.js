"use strict";

const gulp        =    require("gulp");
const $           = require("gulp-load-plugins")();
const rimraf      =    require("rimraf");
const browserSync =    require("browser-sync");
const fs          =    require("fs");
const YAML        = require("js-yaml");

gulp.task("generate", ["clean","generate:pug", "generate:js",
  "generate:scss", "images"], () =>
  gulp.src("src/gh-pages_README.md")
    .pipe($.rename("README.md"))
    .pipe(gulp.dest("build"))
);

gulp.task("generate:pug", () =>
  gulp.src("./src/pug/index.pug")
    .pipe($.data(f =>
      ({data: {
        marked: require("marked"),
        years: YAML.safeLoad(fs.readFileSync("./index.yml")),
        chuitens: fs.readdirSync("./注意点")
          .filter(p => /.+\.md$/.test(p))
          .map(p => ({content: fs.readFileSync("./注意点/"+p).toString(), name: p}))
      }})
    ))
    .pipe($.pug({pretty: true}))
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
  gulp.watch(["./index.yml", "./注意点/*.md", "./src/pug/index.pug"], ["generate:html"]);
  gulp.watch("./src/js/*.js", ["generate:js"]);
  return gulp.watch("./src/scss/*.scss", ["generate:scss"]);});
