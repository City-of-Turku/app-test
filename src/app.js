const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello world!");
});

var port = 3300;

var server = app.listen(port, '0.0.0.0', function () {
  console.log("Server listening on " + port);
})

module.exports.app = app;
