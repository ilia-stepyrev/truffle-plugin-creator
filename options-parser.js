module.exports = (config) => {
    return ({
        contracts: config._.slice(1),
        args: {
            test: config.test || 'sol',
            migration: config.migration || 'new'
        }
    });
}