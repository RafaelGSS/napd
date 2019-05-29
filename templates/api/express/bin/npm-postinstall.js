const fs = require('fs')

console.log('node modules installed!')

// Build .env
const envName = '.env'
try {
    fs.statSync(envName)
} catch (error) {
    fs.copyFile('.env.example', envName, (err) => {
        if (err) throw err;
        console.log('.env generated!');
    });
}
