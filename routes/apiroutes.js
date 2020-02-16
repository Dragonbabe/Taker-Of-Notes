'use strict';


const arr = require('../db/db.json');
const fs = require('fs');
const path = require('path');


module.exports = app => {



    app.get('/api/notes', (req, res) => res.json(arr));


    app.post('/api/notes', (req, res) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].id = i + 1;
        }

        arr.push(req.body);

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(arr),
            err => {
                if (err) throw err;
            });
        return res.json(true);
    });

    app.delete('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        let index;
        for (let i in arr) {
            if (id === arr[i].id) {
                index = i;
            }
        }

        arr.splice(index, 1);
        for (let i in arr) {
            arr[i].id = i;
        }

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(arr),
            err => {
                if (err) throw err;
            });
        return res.json(true);


    })
};