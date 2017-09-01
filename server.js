const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(_dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(_dirname, 'build', 'index.html'))
})

app.listen(9000)
