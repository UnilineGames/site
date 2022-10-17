const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
app.use(serveStatic(path.join(__dirname, '/dist')));
app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '/dist')});
});

const port = process.env.PORT || 80;
app.listen(port)