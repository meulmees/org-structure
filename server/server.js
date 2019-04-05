const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const data = require('./data');

app.use(cors());

app.get('/api/organization', (req, res) => {
  res.json({
    data: data.structure
  })
});

app.listen(port, () => console.log(`server listening on port ${port}!`));
