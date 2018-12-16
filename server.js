const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

app.use('/js', express.static('js'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./index.html'), err => {
    if (err) {
      next(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
