const path = require('path');
const sassTrue = require('sass-true');

const baseUi = path.join(__dirname, './mdl-core.test.scss');

sassTrue.runSass({ file: baseUi }, { describe, it });
