import { src, dest, series } from 'gulp'
import message from './../utils/notify'
import { path, isProd } from './../config'
import gulpif from 'gulp-if'
import plumber from 'gulp-plumber'
import sass from 'gulp-sass'
import sassGlob from 'gulp-sass-glob'
import sourcemaps from 'gulp-sourcemaps'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import stylelint from 'gulp-stylelint'
import browserSync from 'browser-sync'

export function scss() {
  return src(path.styles.src)
    .pipe(plumber({ message }))
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(sassGlob())
    .pipe(
      sass({
        includePaths: ['node_modules'],
        outputStyle: 'compressed'
      })
    )
    .pipe(postcss([
      autoprefixer({
        browsers: [
          '> 1% in JP',
          'last 2 version',
          'ie >= 10',
          'iOS >= 9',
          'Android >= 4.4'
        ]
      })
    ]))
    .pipe(gulpif(!isProd, sourcemaps.write(".")))
    .pipe(dest(path.styles.dest))
    .pipe(browserSync.stream());
}

export function lint() {
  return src(path.styles.watch).pipe(
    stylelint({
      failAfterError: isProd,
      reporters: [{
        formatter: 'string',
        console: true
      }],
      syntax: 'scss'
    })
  );
}

export const styles = series(lint, scss)
