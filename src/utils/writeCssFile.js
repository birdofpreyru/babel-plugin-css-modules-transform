import { appendFileSync, mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';

/**
 * Writes css file to given path (and creates directories)
 *
 * @param {String} path
 * @param {String} content
 * @param {Boolean} append
 */
export default function writeCssFile(path, content, append = false) {
  mkdirSync(dirname(path), { recursive: true });

  if (append) {
    appendFileSync(path, content);
  } else {
    writeFileSync(path, content);
  }
}
