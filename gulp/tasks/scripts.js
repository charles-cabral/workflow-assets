import { src, dest, series } from 'gulp'
import gulpif from 'gulp-if'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import gulpEslint from 'gulp-eslint'
import plumber from 'gulp-plumber'
import message from './../utils/notify.js'
import { path, isProd } from './../config'

export function esTranspile() {
  return src(path.scripts.src)
    .pipe(plumber({ message }))
    .pipe(gulpWebpack(require('./../../webpack.config.js'), webpack))
    .pipe(dest(path.scripts.dest));
}

export function esLint() {
  return src(path.scripts.src)
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpif(isProd, gulpEslint.failAfterError()));
}

export const scripts = series(esLint, esTranspile);
