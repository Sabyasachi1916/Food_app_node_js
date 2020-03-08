const express = require('express')
const app = express();
const json = {'name' : 'Sabyasachi polley'};
app.get('/', (req, res) => {
  res.send(json)
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});