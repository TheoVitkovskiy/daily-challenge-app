import config from './config';
import apiRouter from './api';
import path from 'path';
import formidable from 'formidable';
import http from 'http';
import util from 'util';
import bodyParser from 'body-parser';

import express from 'express';
const server = express();

server.use(bodyParser.json())
server.use('/api', apiRouter);
server.use(express.static(path.join(__dirname, 'build')));

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

server.listen(9000, () => {
  console.info('Express listening on port ', 9000);
});
