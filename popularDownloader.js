const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, './popularDownloader.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    if (err) console.error(err);

    JSON.parse(body).data.children.forEach(item => {
        
        if (path.extname(item.data.url) === '.jpg') {
            const options = {
                url: item.data.id,
                encoding: 'base64'
            };

            // console.log(options);
            request(options), (err, res, body) => {
                if (err) console.error(err);
                
                console.log(res);
            }
            // request(options)
            // .then(res => {
            //     fs.appendFile(`./downloads/${item.data.id}.jpg`, res, "base64", (err) => {
            //         if (err) throw err;
            //         console.log('The downloads were appended to the file!');
            //     });
            // });
        }
    });
});