let express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.get('/checkout', function (req, res) {
    return res.send('pong');
   });

app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3002");
  });
