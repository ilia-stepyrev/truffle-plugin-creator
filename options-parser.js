module.exports = (config) => {
    console.log(config.constructor);
    return ({
        contracts: config._.slice(1),
        args: {
            test: config.test || 'sol',
            migration: config.migration || 'new',
            constr: config.constr && config.constr.trim() === 'true',
            'sol-min': config['sol-min'] || '0.4.22',
            'sol-max': config['sol-max'] || '0.6.0',

            migration_directory: config.migrations_directory,
            contracts_directory: config.contracts_directory,
            test_directory: config.test_directory,
        }
    });
}