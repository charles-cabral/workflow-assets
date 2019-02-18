import browserSync from 'browser-sync'
import { base } from './../config'

export function serve(cb) {
  // console.log('teste', base.dest+'/')
  browserSync.init({
    server: {
      baseDir: base.dest+'/'
    }
  })
  cb()
}

export function reload(cb) {
  browserSync.reload()
  cb()
}
