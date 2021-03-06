const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/edacy-test'));
app.get('/*', function(req,res) {
  res.sendFile('index.html', {root: 'dist/edacy-test/'});
});
app.listen(process.env.PORT || 8080);