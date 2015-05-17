var minimist = require('minimist'),
    knownOptions = {
        string: ['env', 'host'],
        integer: ['port'],
        boolean: ['open'],
        'default': {
            env: process.env.NODE_ENV || 'development',
            host: '127.0.0.1',
            port: 8888,
            open: false
        }
    },
    options = minimist(process.argv.slice(2), knownOptions);

module.exports = options;
