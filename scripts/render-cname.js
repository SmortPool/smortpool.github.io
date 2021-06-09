"use strict";
const path = require("path");
const sh = require("shelljs");

module.exports = function renderCNAME() {
    const srcPath = path.resolve(path.dirname(__filename), "../CNAME");
    const docsPath = path.resolve(
        path.dirname(__filename),
        "../docs/CNAME"
    );

    sh.cp("-R", srcPath, docsPath);
};
