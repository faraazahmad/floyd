#!/usr/bin/env node

var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('create', 'Create the Floyd project in the specified path')
    .example('$0 create -n example -p ~/projects', 'Create project folder example at ~/projects')
    .alias('n', 'name')
    .alias('p', 'path')
    .nargs('f', 1)
    .describe('f', 'Load a file')
    .demandOption(['n', 'p'])
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2019')
    .argv;