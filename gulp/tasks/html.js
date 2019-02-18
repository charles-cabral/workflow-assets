import harp from 'harp'
import { paths } from './../config'

export function html(cb) {
  harp.compile( paths.harp.src , null, () => {})
  cb()
}

