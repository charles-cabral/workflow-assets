import browserSync from 'browser-sync'
import { base } from './../../config'

export function serve(cb) {
  browserSync.init({
    server: { baseDir: base.root }
    // proxy: 'localhost:8888',
  })
  cb()
}


export function reload(cb) {
  browserSync.reload()
  cb()
}
