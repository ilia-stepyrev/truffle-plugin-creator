class OutputModule {
    constructor() {
        this.intend = 0;
    }

    log(message, intend) {
        console.log(this._getText(message, intend));
    }

    logCaption(caption, level, includeDashes) {
        this.intend = (level - 1) * 2;
        this.log(caption);

        if (includeDashes) {
            this.log('-'.repeat(caption.length));
        }

        this.intend += 2;
    }

    emptyLine() {
        console.log('');
    }

    _getText(message, extraIntend) {
        return ' '.repeat(this.intend + (extraIntend || 0)) +  message;
    }
};

module.exports = new OutputModule();