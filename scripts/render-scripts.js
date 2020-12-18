"use strict";
const fs = require("fs");
const packageJSON = require("../package.json");
const path = require("path");
const sh = require("shelljs");

module.exports = function renderScripts() {
    const sourcePath = path.resolve(
        path.dirname(__filename),
        "../src/js/scripts.js"
    );
    const docsPath = path.resolve(
        path.dirname(__filename),
        "../docs/js/scripts.js"
    );

    const copyright = `/*!
    * Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${
        packageJSON.homepage
    })
    * Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
    * Licensed under ${
        packageJSON.license
    } (https://github.com/StartBootstrap/${
        packageJSON.name
    }/blob/master/LICENSE)
    */
    `;
    const scriptsJS = fs.readFileSync(sourcePath);
    const docsPathDirname = path.dirname(docsPath);

    if (!sh.test("-e", docsPathDirname)) {
        sh.mkdir("-p", docsPathDirname);
    }

    fs.writeFileSync(docsPath, copyright + scriptsJS);
};
