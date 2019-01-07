import { paths } from './../config'
import message from './../utils/notify.js'
import { src, dest, series } from 'gulp'
import del from 'del'
import rename from 'gulp-rename'
import plumber from 'gulp-plumber'
import fontmin from 'gulp-fontmin'

export function minifyFont() {
  return src(`${paths.fonts.src}/**/*.ttf`)
    .pipe(plumber({message}))
    .pipe(fontmin())
    .pipe(dest(paths.fonts.dest))
}

export function handleCss() {
  return src(`${paths.fonts.dest}/*.css`)
    .pipe(rename({
      dirname: 'css'
    }))
    .pipe(dest(paths.fonts.src))
}


export function deleteCss() {
  return del([`${paths.fonts.dest}/*.css`])
}

export const fonts = series( minifyFont, handleCss, deleteCss )
