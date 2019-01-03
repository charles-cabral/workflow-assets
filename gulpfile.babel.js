import gulp from "gulp";
import { series, parallel } from "gulp";
import { reload, serve } from "./gulp/tasks/server";
import { clean } from "./gulp/tasks/clean";
import { scripts } from "./gulp/tasks/scripts";
import { styles } from "./gulp/tasks/styles";
import { imagesTheme, imagesVendor } from "./gulp/tasks/images";
import { paths } from "./gulp/config";

function bystander() {
  gulp.watch([paths.styles.watch, paths.styles.modules], styles);
  gulp.watch(
    [paths.scripts.watch, paths.scripts.modules],
    series(scripts, reload)
  );
}

export const build = series(
    clean,
    parallel(imagesTheme, imagesVendor, styles, scripts)
);

gulp.task('build', series(build))
gulp.task('clean', series(clean))

export const dev = series(build, serve, bystander);
export default dev;