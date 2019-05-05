const fs = require('fs-extra')

/**
 * Create folder by path
 * @param String path 
 */
function createFolder(path) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
            resolve(true)
        } else {
            reject("Folder already exists!")
        }
    })
}

/**
 * Copy files - from to
 * @param String from 
 * @param String to 
 */
function copyFiles(from, to) {
    return fs.copy(from, to)
}

module.exports = {
    createFolder,
    copyFiles
}
