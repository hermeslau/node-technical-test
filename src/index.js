const express = require('express')
const app = express()
const port = 3000

//Find the endpoint by router
require('./routes/rss.route')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(function(req, res, next) {
  res.status(404).send('404 not found.');
});