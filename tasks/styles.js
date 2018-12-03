import gulp from 'gulp'
import sass from 'gulp-sass'

export function styles() {
    gulp.src("site/css/*.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest('site/css/'))
}