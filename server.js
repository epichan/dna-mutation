const http = require('http');
const express = require('express');

const APP = express();
const SERVER = http.createServer(APP);
const PORT = 4000

APP.get('/', function(req, res) {
    res.json('Hello');
});

APP.post('/mutation', function(req, res) {
    if(true) {
        res.sendStatus(200);
    } else {
        res.sendStatus(403);
    }
    
});

SERVER.listen(PORT, () => {
    console.log('Server listening at: ', PORT);
});