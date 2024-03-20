const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(' 퇴근 시각 : 17:22:24 ');
})

app.listen(3000);
