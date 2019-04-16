#!/usr/bin/env node

const metadata = require('./package.json')

const caporal = require('caporal')

caporal.version(metadata.version)

caporal
    .command('init', 'Start a fresh new instalation of project')
    .argument('<projectName>', 'Project name')
    .option('--dir <folderPath>', 'Folder to create structure')
    .action((args, option, logger) => {
        console.log('args', args)
        console.log('option', option)
        console.log('logger', logger)
    })

caporal.parse(process.env)
