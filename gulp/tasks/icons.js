import { base, path } from '../config'
import { cleanSvg } from './clean'
import message from '../utils/notify'
import { src, dest, parallel } from 'gulp'
import plumber from 'gulp-plumber'
import imagemin from 'gulp-imagemin'
import iconfont from 'gulp-iconfont'
import iconfontCss from 'gulp-iconfont-css'

export function createFontIcon() {
  return src(path.images.icons.svg)
    .pipe(plumber({ message }))
    .pipe(imagemin())
    .pipe(iconfont({
      fontName: base.fonticon.name,
      prependUnicode: false,
      copyright: base.fonticon.copyright,
      formats: ['ttf', 'eot', 'woff', 'svg']
    }))
    .on('end', () => setTimeout( () => cleanSvg(), 600 ) )
    .pipe(dest(path.fonts.dest));
}

export function createFontIconSass() {
  return src(path.images.icons.svg)
    .pipe(plumber({ message }))
    .pipe(iconfontCss({
      fontName: base.fonticon.name,
      path: 'gulp/templates/scss/icons.scss',
      targetPath: '_fonticons.scss',
      fontPath: './../font/',
      firstGlyph: 0xEa01
    }))
    .pipe(dest(path.images.icons.scss));
}


export const icons = parallel(createFontIcon, createFontIconSass)