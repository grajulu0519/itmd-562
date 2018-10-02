var express = require('express');
var app = express();
const hostname = '127.0.0.1';
const port = 3000;
let counter = 0;
app.get("/", function (req, res) {
  throw new Error("BROKEN"); // Express will catch this on its own.
});
app.get('/counter', function (req, res) {
   if(counter == 0){
   	res.send('Counter value '+ counter);
	res.status(200)
   }else if(counter > 0){
   	res.send('Counter value after POST is been called '+counter);
   	res.status(200)
   }
   
});
app.post('/counter', (req, res) => {
  counter++;
  res.status(204).send();
});
app.delete('/counter', (req, res) => {
  counter = 0;
  res.status(204).send();
});
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Web App listening at http://%s:%s", host, port)

})