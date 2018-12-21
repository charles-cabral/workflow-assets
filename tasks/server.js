import gulp from "gulp";
import Browser from "browser-sync";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import { config as webpackConfig } from "./webpack";
import styles from "./styles";

const browser = Browser.create();
const bundler = webpack(webpackConfig);

export function server() {
  let config = {
    server: "site",
    open: false,
    middleware: [webpackDevMiddleware(bundler, {})]
  };
  browser.init(config);
  gulp.watch("src/js/*.js").on("change", () => browser.reload());
  gulp.watch("src/css/*.scss", styles).on("change", () => browser.reload());
}
