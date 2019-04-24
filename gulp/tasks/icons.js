import { path } from '../config'
import message from '../utils/notify'
import { src, dest, series } from 'gulp'
import plumber from 'gulp-plumber'
import imagemin from 'gulp-imagemin'
import iconfont from 'gulp-iconfont'

export function createFontIcon() {
  return src([path.images.icons])
    .pipe(plumber({ message }))
    .pipe(imagemin())
    .pipe(iconfont({
      fontName: 'layout-icons',
      prependUnicode: false,
      formats: ['ttf', 'eot', 'woff', 'svg']
    }))
    .on('glyphs', function(glyphs, options) {
      console.log(glyphs, options);
    })
    .pipe(dest(path.fonts.dest));
}

export const icons = series(createFontIcon)