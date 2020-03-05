const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/api/admin', function (req, res) {
  // Add firebase auth checking
  if (req.headers.authorization)
      res.sendStatus(200);
  else 
    res.sendStatus(401);
});

app.listen(process.env.PORT || 8080);