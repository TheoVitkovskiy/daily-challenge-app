import express from 'express';
import path from 'path';
import apiRouter from './api';
import bodyParser from 'body-parser';
import open from 'open';

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json())
app.use(express.static('public'));
app.use('/api', apiRouter)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
