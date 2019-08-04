const outputModule = require('./../output-module');
const fileTemplate = require('./../file-template');
const filesModule = require('./../files-module');

const path = require('path');

module.exports = (contracts, options) => {
    if (options.migration === 'none') {
        return;
    }

    outputModule.logCaption('Generate migration', 1, true);
    const lastMigration = filesModule.getFiles(options.migrations_directory)
        .sort((a, b) => parseInt(getMigration(b) - getMigration(a)))[0];

    if (options.migration === 'new') {
        createMigration(contracts, options, lastMigration);
    }

    if (options.migration === 'current') {
        addToExistingMigration(contracts, options, lastMigration);
    }
}

function createMigration(contracts, options, lastMigration) {
    const p = path.join(options.migrations_directory, ((getMigration(lastMigration) + 1) + '_deploy_contracts.js'));
    const template = new fileTemplate();

    contracts.forEach(contract => {
        template.addLine(`const ${contract} = artifacts.require("${contract}");`)
    });

    template.emptyLine();
    template.addLine('module.exports = function(deployer) {');

    contracts.forEach(contract => {
        template.addLine(`deployer.deploy(${contract});`, 1);
    });

    template.addLine('};');

    filesModule.createFileByTemplate(p, template);
}

function addToExistingMigration(contracts, options, lastMigration) {
    // TODO: need to improve this part

    const p = path.join(options.migrations_directory, lastMigration);

    let fileContent = filesModule.readFile(p);
    fileContent = insertAfterLine(fileContent, 'artifacts.require', 
        contracts.map(c => `const ${c} = artifacts.require("${c}");`).join('\n'));

    fileContent = insertAfterLine(fileContent, 'deployer.deploy', 
        contracts.map(c => `\tdeployer.deploy(${c});`).join('\n'));

    filesModule.createFile(p, fileContent);
}

function insertAfterLine(fileContent, command, content) {
    const ind = fileContent.lastIndexOf(command);
    const indEndLine = fileContent.indexOf('\n', ind) + 1;
    return fileContent.slice(0, indEndLine) + content + '\n' + fileContent.slice(indEndLine);
}

function getMigration (a) {
    return parseInt(a.slice(0, a.indexOf('_')));
}