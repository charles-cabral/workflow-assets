import { src, dest, series } from "gulp";
import gulpif from "gulp-if";
import webpack from "webpack";
import gulpWebpack from "webpack-stream";
import gulpEslint from "gulp-eslint";
import plumber from "gulp-plumber";
import errorHandler from "../utils/errorHandler.js";
import { paths, isProd } from "../config";

export function esTranspile() {
  return src(paths.scripts.src)
    .pipe(plumber({ errorHandler }))
    .pipe(gulpWebpack(require("../../webpack.config.js"), webpack))
    .pipe(dest(paths.scripts.dest));
}

export function esLint() {
  return src(paths.scripts.src)
    .pipe(gulpEslint())
    .pipe(gulpEslint.format())
    .pipe(gulpif(isProd, gulpEslint.failAfterError()));
}

export const scripts = series(esLint, esTranspile);
