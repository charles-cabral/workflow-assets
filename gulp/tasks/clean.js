import del from 'del'
import { base, path } from './../config'

export function clean() {
  return del([base.dest])
}

export function cleanSvg() {
  return del([`${path.images.icons.scss}/*.svg`])
}

export function cleanCss() {
  return del([`${path.fonts.dest}*.css`])
}