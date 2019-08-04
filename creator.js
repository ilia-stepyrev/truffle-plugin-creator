const displayHelpAction = require('./display-help-action');
const optionsParser = require('./options-parser');
const outputModule = require('./output-module');

const generators = [
  require('./generators/contract-generator'),
  require('./generators/test-generator'),
  require('./generators/migration-generator'),
]

module.exports = async (config) => {
    if (config.help) {
      displayHelpAction();
      return;
    }

    const options = optionsParser(config);

    options.contracts.forEach(contract => {
      outputModule.logCaption(`Create: ${contract}`, 1, true);
      generators.forEach(generator => generator(contract, options.args));
      outputModule.emptyLine();
    });
  }