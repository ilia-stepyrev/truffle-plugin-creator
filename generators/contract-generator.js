const outputModule = require('./../output-module');
const fileTemplate = require('./../file-template');
const filesModule = require('./../files-module');

const path = require('path');

module.exports = (contract, options) => {
    outputModule.logCaption('Generate contract itself', 2);

    const p = path.join(options.contracts_directory, contract + '.sol');
    const template = new fileTemplate();
    template.addLine(`pragma solidity >=${options['sol-min']} <${options['sol-max']}`);
    template.emptyLine();
    template.emptyLine();
    template.addLine(`contract ${contract} {`);

    if (options.constructor) {
        template.addLine('constructor() public {', 1);
        template.emptyLine();
        template.addLine('}', 1);
    } else {
        template.emptyLine();
    }

    template.addLine('}');

    filesModule.createFileByTemplate(p, template);

}