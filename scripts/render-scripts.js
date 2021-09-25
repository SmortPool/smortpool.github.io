"use strict";
const fs = require("fs");
const packageJSON = require("../package.json");
const path = require("path");
const sh = require("shelljs");

module.exports = function renderScripts() {
    const sourcePath = path.resolve(
        path.dirname(__filename),
        "../src/js"
    );
    const docsPath = path.resolve(
        path.dirname(__filename),
        "../docs/js/."
    );

    sh.cp("-R",sourcePath,docsPath);
};
