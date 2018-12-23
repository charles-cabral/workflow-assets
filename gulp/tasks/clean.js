import del from "del";
import { paths } from "../config";

export function clean() {
  return del([paths.dest]).then(path => {
    // eslint-disable-next-line no-console
    console.log('Deleted files and folders:\n', path.join('\n'));
  });
}
