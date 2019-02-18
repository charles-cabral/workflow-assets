import del from 'del'
import { base } from './../config'

export function clean() {
  return del([base.dest])
}
