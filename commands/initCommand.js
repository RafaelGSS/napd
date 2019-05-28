const { createFolder, copyFiles } = require("./utils/folder")
const { prompt } = require('enquirer')
const ora = require('ora');
const fs = require('fs')


class InitCommand {
  constructor(projectName, templateType) {
    this.loader = ora('Initializing...')
    this.projectPath = ""
    this.templatePath = `${__dirname}/../templates/${templateType}`
    this.projectName = projectName
  }
  async execute({ dir }) {
    this.projectPath = (dir) ? `${dir}/${this.projectName}` : `./${this.projectName}`

    if (!this.validationArguments()) {
      this.loader.fail('The template choosed not found! Please tip -h for help')
      return
    }

    const { shouldInstall } = await prompt({
      type: 'confirm',
      name: 'shouldInstall',
      message: `Do you want me to run the install command? To path: ${this.projectPath}`
    })

    this.loader.start()
    if (shouldInstall) {
      await this.createProjectFolder()
      await this.moveFiles()
      this.loader.warn("The project has endend, but needs install node_modules from package.json and adjust description!")
    }
    this.loader.stop()
  }

  validationArguments() {
    if (fs.existsSync(this.templatePath)) {
      return true
    }
    return false
  }

  createProjectFolder() {
    this.loader.info('Creating project folders...')
    return createFolder(this.projectPath)
      .then(_ => this.loader.succeed('Finished creation of folder.'))
      .catch(err => this.loader.fail(err.message))

  }

  moveFiles() {
    this.loader.info('Moving files...')
    return copyFiles(this.templatePath, this.projectPath)
      .then(_ => this.loader.succeed('Finished moving files.'))
      .catch(err => this.loader.fail(err.message))
  }
}

module.exports = InitCommand
