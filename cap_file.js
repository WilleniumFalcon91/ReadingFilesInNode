const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface ( {
    input: process.stdin,
    output: process.stdout
})

rl.question('filename: ', (filename) => {
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        if (err) {
            console.log(err.message);
            return;
        }
        let content = buffer.toString();
        let upcase = content.toUpperCase();
        console.log(upcase);
    });
});