import browserSync from 'browser-sync'

export function serve(cb) {
  browserSync.init({
    server: {
      baseDir: './'
    },
    notify: false
  });
  cb();
}

export function reload(cb) {
  browserSync.reload();
  cb();
}
