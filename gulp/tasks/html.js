import nanogen from 'nanogen'

export function html(cb) {
  nanogen.build()
  cb()
}