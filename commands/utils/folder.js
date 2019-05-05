const fs = require('fs')

/**
 * Create folder by path
 * @param String path 
 */
async function createFolder(path) {
    return await fs.mkdir(path)
}

module.exports = {
    createFolder
}
