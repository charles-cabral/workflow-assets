import { path } from './../config'
import message from './../utils/notify'
import { src, dest, series } from 'gulp'
import plumber from 'gulp-plumber'
import imagemin from 'gulp-imagemin'
import rename from 'gulp-rename'

export function imagesVendor() {
  return src(path.images.modules)
    .pipe(plumber({ message }))
    .pipe(imagemin())
    .pipe(rename({
      dirname: '/vendor'
    }))
    .pipe(dest(path.images.dest));
}

export function imagesTheme() {
  return src(path.images.src)
    .pipe(plumber({ message }))
    .pipe(imagemin())
    .pipe(dest(path.images.dest));
}

export const images = series(imagesVendor, imagesTheme);