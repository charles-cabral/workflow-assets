import gulp from 'gulp'

import { scripts } from './webpack'
import { server }  from './server'
import { styles }  from './styles'

export const dev   = gulp.parallel(server, styles)
export const build = gulp.series( scripts )

export default dev
