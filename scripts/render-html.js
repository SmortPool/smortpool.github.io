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


    const srcCPath = path.resolve(path.dirname(__filename), "../src/calculator.html");
    const docsCPath = path.resolve(
        path.dirname(__filename),
        "../docs/calculator.html"
    );

    sh.cp("-R", srcCPath, docsCPath);
};
