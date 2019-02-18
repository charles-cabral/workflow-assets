import browserSync from 'browser-sync'
import harp from 'harp'
import { base, path } from './../../config'

export function serve(cb) {
  harp.server( path.harp.public , {
    port: base.port
  }, () => {
    browserSync({
      proxy: base.host+':'+base.port
    })
  })
  cb()
}

export function reload(cb) {
  browserSync.reload()
  cb()
}