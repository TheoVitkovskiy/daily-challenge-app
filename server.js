import apiRouter from './api';
import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';

const server = express();

server.use(bodyParser.json())
server.use('/api', apiRouter);
server.use(express.static(path.resolve(__dirname, './react-ui/build')));

server.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'))
})

server.listen(process.env.PORT || 5000, () => {
  console.info('Express listening on port ', config.port);
});
