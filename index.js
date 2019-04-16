#!/usr/bin/env node

const metadata = require('./package.json')

const caporal = require('caporal')
const InitCommand = require('./commands/initCommand')

caporal.version(metadata.version)

caporal
    .command('init', 'Start a fresh new instalation of project')
    .argument('<projectName>', 'Project name')
    .option('--dir <folderPath>', 'Folder to create structure')
    .action((args, option, logger) => {
        const initCommand = new InitCommand();
        initCommand.execute(args, option)
    })

caporal.parse(process.argv)
