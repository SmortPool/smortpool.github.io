"use strict";
const path = require("path");
const sh = require("shelljs");

module.exports = function renderHTML() {
    const srcPath = path.resolve(path.dirname(__filename), "../src/index.html");
    const docsPath = path.resolve(
        path.dirname(__filename),
        "../docs/index.html"
    );

    sh.cp("-R", srcPath, docsPath);
};
