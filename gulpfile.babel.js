import gulp from 'gulp'
import { series, parallel } from 'gulp'
import { reload, serve } from './gulp/tasks/server'
import { clean } from './gulp/tasks/clean'
import { scripts } from './gulp/tasks/scripts'
import { styles } from './gulp/tasks/styles'
import { images } from './gulp/tasks/images'
import { icons } from './gulp/tasks/icons'
import { fonts } from './gulp/tasks/fonts'
import { path } from './gulp/config'

function bystander() {
  gulp.watch(
    [path.styles.watch, path.styles.modules],
    styles
  )
  gulp.watch(
    [path.scripts.watch, path.scripts.modules],
    series(scripts, reload)
  )
}

export const build = series(
  clean,
  parallel(fonts, images, icons, styles, scripts)
)

gulp.task('build', series(build))
gulp.task('clean', series(clean))
gulp.task('icons', series(icons))

export const dev = series(build, serve, bystander)

export default dev
