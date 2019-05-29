#!/usr/bin/env node

const metadata = require('./package.json')

const caporal = require('caporal')
const InitCommand = require('./commands/initCommand')

caporal.version(metadata.version)

caporal
  .command('init', 'Start a fresh new instalation of project')
  .argument('<projectName>', 'Project name')
  .argument('<templateType>', 'Template type - values [ api/express, api/fastify ]', caporal.STRING, 'api/express')
  .complete(() => Promise.resolve(['api/express', 'api/fastify']))
  .option('--dir <folderPath>', 'Folder to create structure')
  .action(({ projectName, templateType }, option, logger) => {
    const initCommand = new InitCommand(projectName, templateType);
    initCommand.execute(option)
  })

caporal.parse(process.argv)
