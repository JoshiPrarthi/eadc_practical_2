var express = require('express');
var app = express();
const port = process.env.PORT || 8000
app.use(express.static(__dirname + '/prarthi'));
app.listen(port,function() {
// console.log("server starting on " + 8000);
});