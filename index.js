const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(' 퇴근(예정):17시 21분 23초 !1 ')
})

app.listen(3000);
