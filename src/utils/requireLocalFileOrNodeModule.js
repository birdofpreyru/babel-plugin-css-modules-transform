import { resolve as resolvePath } from 'path';

/**
 * Require local file or node modules
 *
 * @param {String} path
 * @returns {*}
 */
export default function requireLocalFileOrNodeModule(path) {
  const localFile = resolvePath(process.cwd(), path);

  /* eslint-disable global-require, import/no-dynamic-require */
  try {
    // first try to require local file
    return require(localFile);
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      // try to require node_module
      return require(path);
    }
    throw e;
  }
  /* eslint-enable global-require, import/no-dynamic-require */
}
