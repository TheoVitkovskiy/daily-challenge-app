import apiRouter from './api';
import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';

const server = express();

server.use(bodyParser.json())
server.use('/api', apiRouter);
server.use(express.static(path.join(__dirname, 'build')));

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

server.listen(process.env.PORT || 8080, () => {
  console.info('Express listening on port ', config.port);
});
