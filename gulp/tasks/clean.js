import del from 'del'
import { paths } from './../config'

export function clean() {
  return del([paths.dest])
}
