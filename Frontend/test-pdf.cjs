const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('../resume.pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('output.txt', data.text, 'utf-8');
    fs.writeFileSync('error.txt', 'Success', 'utf-8');
}).catch(function (error) {
    fs.writeFileSync('error.txt', error.toString(), 'utf-8');
});
