
var gulp         = require("gulp");
var sass         = require("gulp-sass");
var pleeease     = require('gulp-pleeease');
var browser      = require("browser-sync");
var plumber      = require("gulp-plumber");

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("css", function() {
    gulp.src("sass/*scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(pleeease())
        .pipe(gulp.dest("css"))
        .pipe(browser.reload({stream:true}))
});

gulp.task("default", ["server"], function() {
    gulp.watch(["sass/*scss"],["css"]);
});
