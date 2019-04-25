import { base, path } from '../config'
import message from '../utils/notify'
import { src, dest, series } from 'gulp'
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
      formats: ['ttf', 'eot', 'woff', 'svg']
    }))
    .pipe(dest(path.fonts.dest));
}

export function createFontIconSass() {
  return src(path.images.icons.svg)
    .pipe(plumber({ message }))
    .pipe(iconfontCss({
      fontName: base.fonticon.name,
      path: 'scss',
      targetPath: `_fonticons.scss`,
      fontPath: './../font/'
    }))
    .pipe(dest(path.images.icons.scss));
}

export function streamFonticon(done) {
  createFontIconSass()
  done()
}

export const icons = series( createFontIcon, streamFonticon )