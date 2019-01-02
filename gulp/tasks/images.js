import { src, dest } from 'gulp'
import plumber from 'gulp-plumber'
import errorHandler from '../utils/errorHandler.js'
import imagemin from 'gulp-imagemin'
import rename from 'gulp-rename'
import { paths } from '../config'

export function imagesVendor() {
  return src(paths.images.modules)
    .pipe(plumber({errorHandler}))
    .pipe(imagemin())
    .pipe(rename({dirname: '/vendor'}))
    .pipe(dest(paths.images.dest));
}


export function imagesTheme() {
  return src(paths.images.src)
    .pipe(plumber({errorHandler}))
    .pipe(imagemin())
    .pipe(dest(paths.images.dest));
}
