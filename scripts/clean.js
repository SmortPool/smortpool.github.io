const sh = require("shelljs");
const path = require("path");

const docsPath = path.resolve(path.dirname(__filename), "../docs");

sh.rm("-rf", `${docsPath}/*`);
