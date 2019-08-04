const outputModule = require('./../output-module');
const fileTemplate = require('./../file-template');
const filesModule = require('./../files-module');

const path = require('path');

module.exports = (contract, options) => {
    if (options.test === 'none') {
        return;
    }

    outputModule.logCaption('Generate test', 2);

    if (options.test === 'sol' || options.test === 'both') {
        generateSolTest(contract, options);
    }

    if (options.test === 'js' || options.test === 'both') {
        generateJsTest(contract, options);
    }
}

function generateSolTest(contract, options) {
    const name = `Test${contract}`;
    const p = path.join(options.test_directory, name + '.sol');
    const template = new fileTemplate();

    template.addLine(`pragma solidity >=${options['sol-min']} <${options['sol-max']}`);
    template.emptyLine();
    template.emptyLine();
    template.addLine('import "truffle/Assert.sol";')
    template.addLine('import "truffle/DeployedAddresses.sol";');
    template.addLine(`import "../contracts/${contract}.sol";`);
    template.emptyLine();
    
    template.addLine(`contract ${name}`);
    template.addLine('function testSomething() public {', 1);
    template.emptyLine();
    template.addLine('}', 1);
    template.addLine('}');


    filesModule.createFileByTemplate(p, template);
}

function generateJsTest(contract, options) {
    const name = `${contract}.js`;
    const p = path.join(options.test_directory, name);
    const template = new fileTemplate();

    template.addLine(`const ${contract} = artifacts.require("${contract}");`);
    template.emptyLine();
    template.addLine(`contract('${contract}', function(accounts) {`);
    template.addLine('it("PUT NAME HERE", function() {', 1);
    template.addLine(`return ${contract}.deployed().then(function(instance) {`, 2);
    template.emptyLine();
    template.addLine('});', 2);
    template.addLine('});', 1);
    template.addLine('});');
    

    filesModule.createFileByTemplate(p, template);
}