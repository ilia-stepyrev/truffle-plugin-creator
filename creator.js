const displayHelpAction = require('./display-help-action');
const optionsParser = require('./options-parser');

module.exports = async (config) => {
    if (config.help) {
      displayHelpAction();
      return;
    }

    const options = optionsParser(config);

    console.log(JSON.stringify(options));
  }