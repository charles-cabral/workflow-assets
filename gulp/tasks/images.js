import { paths } from './../config'
import message from './../utils/notify'
import { src, dest, series } from 'gulp'
import plumber from 'gulp-plumber'
import imagemin from 'gulp-imagemin'
import rename from 'gulp-rename'

export function imagesVendor() {
  return src(paths.images.modules)
    .pipe(plumber({ message }))
    .pipe(imagemin())
    .pipe(rename({
      dirname: '/vendor'
    }))
    .pipe(dest(paths.images.dest));
}


export function imagesTheme() {
  return src(paths.images.src)
    .pipe(plumber({ message }))
    .pipe(imagemin())
    .pipe(dest(paths.images.dest));
}

export const images = series(imagesVendor, imagesTheme);