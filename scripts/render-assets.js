"use strict";
const fs = require("fs");
const path = require("path");
const sh = require("shelljs");

module.exports = function renderAssets() {
    const sourcePath = path.resolve(path.dirname(__filename), "../src/assets");
    const docsPath = path.resolve(path.dirname(__filename), "../docs/.");

    sh.cp("-R", sourcePath, docsPath);
};
