import browserSync from 'browser-sync'
import { base } from './../config'

export function serve(cb) {
  browserSync.init({
    server: { baseDir: base.root }
  })
  cb()
}


export function reload(cb) {
  browserSync.reload()
  cb()
}
