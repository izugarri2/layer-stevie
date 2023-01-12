var express = require('express');
var router = express.Router();

app.use(express.static(__dirname+'/public'));
app.listen(8080);
module.exports = router;
