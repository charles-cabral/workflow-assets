import gulp from "gulp";
import { series, parallel } from "gulp";
import { reload, serve } from "./gulp/tasks/server";
import { clean } from "./gulp/tasks/clean";
import { scripts } from "./gulp/tasks/scripts";
import { styles } from "./gulp/tasks/styles";
import { paths } from "./gulp/config";

function watcher() {
  gulp.watch([paths.styles.watch, paths.styles.modules], styles);
  gulp.watch(
    [paths.scripts.watch, paths.scripts.modules],
    series(scripts, reload)
  );
}

export const build = series(
    clean,
    parallel(styles, scripts)
);

gulp.task('clean', series(clean))
gulp.task('build', series(build))

export const dev = series(build, serve, watcher);
export default dev;
