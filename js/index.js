const readPkgUp = require('read-pkg-up');

function tryJest() {
  try {
    const { packageJson } = readPkgUp.sync() || {};
    const dep = packageJson && packageJson.dependencies && packageJson.dependencies.jest;
    const devdep = packageJson && packageJson.devDependencies && packageJson.devDependencies.jest;
    return !!(devdep || dep);
  } catch (e) {
    return false;
  }
}

module.exports = {
  extends: [
    '../tencent/js',
    '../tencent/import',
    '../rules/style',
    '../rules/comments',
    '../rules/jsdoc',
  ],
};

if (tryJest()) {
  module.exports.extends.push('../rules/jest');
}
