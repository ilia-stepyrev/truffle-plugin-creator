const  fs = require('fs');

class FilesModule {
    constructor() {
        
    }

    createFileByTemplate(path, template) {
        fs.writeFileSync(path, template.render());
    }

    createFile(path, content) {
        fs.writeFileSync(path, content);
    }

    getFiles(path) {
        return fs.readdirSync(path);
    }

    readFile(path) {
        return fs.readFileSync(path);
    }
};

module.exports = new FilesModule();