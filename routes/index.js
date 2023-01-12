const express = require("express");
const app = express();
const port = process.env.PORT || 8100;

app.use(express.static(__dirname+'/public));
app.set('x-powered-by', false);
app.listen(port, () => console.log(`app listening on port ${port}!`));