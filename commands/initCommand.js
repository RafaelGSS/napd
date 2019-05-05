const { createFolder } = require("./utils/folder")
const ora = require('ora');
const { prompt } = require('enquirer')


class InitCommand {
<<<<<<< HEAD
    constructor() {
        this.loader = ora('Initializing...')
    }
    async execute({ projectName }, { dir }) {
        this.createProjectFolder(projectName, dir)

        const { shouldInstall } = await prompt({
            type: 'confirm',
            name: 'shouldInstall',
            message: `Do you want me to run the install command? To path: ${folderPath}`
        })

        if (shouldInstall) {
            createFolder(folderPath)
                .then(_ => {
                    this.spinnerInstance.succeed('Finished creation of folder.')
                })
                .catch(err => this.spinnerInstance.fail(err.message))
        }
    }
    createProjectFolder(projectName, dir) {
        const folderPath = (dir) ? `${dir}/${projectName}` : `./${projectName}`
        this.loader.info('Creating project folders')
=======
    execute(args, opts) {
        const { projectName } = args
	const baseFolderPath = process.cwd()
>>>>>>> 09e756122251d8d6b07943231a44e786c114d75a
    }
}

module.exports = InitCommand
