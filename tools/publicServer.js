import express from 'express';
import path from 'path';
import apiRouter from '../api';
import bodyParser from 'body-parser';
import open from 'open';
import favicon from 'serve-favicon';
import compression from 'compression';

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api', apiRouter)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
