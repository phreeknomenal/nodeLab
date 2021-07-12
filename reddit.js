const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, './popularArticles.json');

request('https://www.reddit.com/r/popular.json', (err, res, body) => {
        if (err) console.error(err);
        
        let articlesArray = [];

        JSON.parse(body).data.children.forEach(item => {            

            let items = {
                'author': item.data.author,
                'title': item.data.title,
                'url': item.data.url
            }

            articlesArray.push(items);
        });
        fs.writeFile(dataPath, JSON.stringify(articlesArray), (err) => {
            if (err) console.error(err);
            console.log('File was saved successfully!');
        });
        
    });