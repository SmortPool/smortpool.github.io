"use strict";
const autoprefixer = require("autoprefixer");
const fs = require("fs");
const packageJSON = require("../package.json");
const path = require("path");
const postcss = require("postcss");
const sass = require("sass");
const sh = require("shelljs");

const stylesPath = "../src/scss/styles.scss";
const docsPath = path.resolve(
    path.dirname(__filename),
    "../docs/css/styles.css"
);

module.exports = function renderSCSS() {
    const results = sass.renderSync({
        data: entryPoint,
        includePaths: [
            path.resolve(path.dirname(__filename), "../node_modules"),
        ],
    });

    const docsPathDirname = path.dirname(docsPath);
    if (!sh.test("-e", docsPathDirname)) {
        sh.mkdir("-p", docsPathDirname);
    }

    postcss([autoprefixer])
        .process(results.css, { from: "styles.css", to: "styles.css" })
        .then((result) => {
            result.warnings().forEach((warn) => {
                console.warn(warn.toString());
            });
            fs.writeFileSync(docsPath, result.css.toString());
        });
};

const entryPoint = `/*!
* Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${
    packageJSON.homepage
})
* Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${
    packageJSON.name
}/blob/master/LICENSE)
*/
@import "${stylesPath}"
`;
