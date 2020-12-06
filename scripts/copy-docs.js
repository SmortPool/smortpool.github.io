const sh = require('shelljs');
const path = require('path');

const destPath = path.resolve(path.dirname(__filename), '../dist/*');
const docsPath = path.resolve(path.dirname(__filename), '../docs');

sh.cp('-R', destPath, docsPath);