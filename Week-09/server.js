const express = require('express')
const app = express()
const port = 3000

var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID

app.use(express.static('public'))
app.use(express.json())

MongoClient.connect('mongodb://localhost:27017/booksdb', function (err, client) {
  if (err)
	  console.log(err)
  let db = client.db('booksdb')
  let books = db.collection('books')

  app.post('/books', (req, res) => {
    let newBook= req.body

    books.insertOne(newBook, function(err, result) {
      if (err) {
        console.log(err)
        res.status(500).send("There was an internal error")
      } else {
        res.send(result.ops[0])
		res.status(200)
      }
    });
  }); 
  
  app.get('/books/:id', (req, res) => {
    let id = ObjectID.createFromHexString(req.params.id)
    books.findOne({"_id": id}, function(err, book) {
      if (err) {
        console.log(err)
        res.status(500).send("Internal server error")
      } else {
        console.log(book)
        if (book === null) {
          res.status(404).send("Not found")
        } else {
          res.send(book)
		  res.status(200)
        }
      }
    });
  });
  
  app.put('/books/:id', (req, res) => {
  let updatedBook = req.body;
  let id = ObjectID.createFromHexString(req.params.id);
  //console.log(updatedBook['numPages']);
  books.updateOne({'_id':id},{$set:{'title':updatedBook['title'],'author':updatedBook['author'],'numPages':updatedBook['numPages']}}, function(err, result) {
      if (err) {
        console.log(err)
        res.status(500).send("Internal server error")
      } else {
		  		
	  res.json(result)
	  res.status(204)
      }
 
    });

});
  app.delete('/books/:id', (req, res) => {

  let id = ObjectID.createFromHexString(req.params.id);
  
  books.deleteOne({'_id':id}, function(err, result) {
      if (err) {
        console.log(err)
        res.status(500).send("Internal server error")
      } else {
		  		
	  res.json(result)
	  res.status(204).send("One document deleted")
      }
 
    });

});

})
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))