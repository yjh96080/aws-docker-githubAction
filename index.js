const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('양정훈의 퇴근(예정):17시 28분 23초 ! ')
})

app.listen(3000);
