const  fs = require('fs');

class FilesModule {
    constructor() {
        
    }

    createFileByTemplate(path, template) {
        fs.writeFileSync(path, template.render());
    }
};

module.exports = new FilesModule();