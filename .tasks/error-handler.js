'use strict';

var chalk = require('chalk');

module.exports = {
    handler: function(error) {
        console.error(chalk.bgRed('Error:') + ' ' + chalk.red(error.toString()));
    }
};
