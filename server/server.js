const path = require('path');
const fs = require('fs');

let chirpArray = path.join(__dirname, '../chirps.json');

fs.readFile(chirpArray, 'utf8', (err, chirps) => {
    var chirp = JSON.parse(chirps);

    console.log(chirps)
});
