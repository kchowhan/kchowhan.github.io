var express = require('express');
var app = express();
var compress = require('compression');

app.set('port', (process.env.PORT || 5000));
app.use(compress());

app.use(
  "/",
  express.static(__dirname)
);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
