import del from 'del'
import { base, path } from './../config'

export function clean() {
  return del([
    base.dest,
    `${path.images.icons.scss}/*.svg`
  ])
}
