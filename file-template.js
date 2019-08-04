module.exports = class FileTemplate {
    constructor() {
        this.lines = [];
    }

    addLine(line, tabAmount) {
        this.lines.push('\t'.repeat(tabAmount || 0) + line);
    }

    emptyLine() {
        this.lines.push('');
    }

    render() {
        return this.lines.join('\n');
    }
}