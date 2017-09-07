require('import-export');
require('babel-core/register')({presets: ['es2015', 'react']});

const apiRouter = require('./api');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json())
app.use('/api', apiRouter);
app.use(express.static('./build'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(process.env.PORT || 8080);
console.log(`Listening on Port 8080`);
